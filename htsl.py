import customtkinter as ctk
from tkinter import messagebox
import boto3
from botocore.exceptions import ClientError
from decimal import Decimal

# Initialize the main app
ctk.set_appearance_mode("dark")  # Themes: "light", "dark", or "system"
ctk.set_default_color_theme("blue")  # Themes: "blue", "green", "dark-blue"

class EventBookingApp(ctk.CTk):
    def __init__(self, dyn_resource):
        super().__init__()
        self.title("Event Booking Form")
        self.geometry("600x700")

        # DynamoDB table setup
        self.dyn_resource = dyn_resource
        self.table_name = "HTSL_AddEvent"  # Replace with your actual table name
        self.table = self.dyn_resource.Table(self.table_name)

        # Title and Description
        self.title_label = ctk.CTkLabel(self, text="Event Booking Form", font=("Arial", 24, "bold"))
        self.title_label.pack(pady=20)

        self.instructions = ctk.CTkLabel(
            self, 
            text="Please fill out the details for the event below.",
            font=("Arial", 14)
        )
        self.instructions.pack(pady=10)

        # Form Fields
        self.fields = {
            "event": "Event Name",
            "prof": "Professor Name",
            "prof_em": "Professor Email",
            "program": "Program",
            "course": "Course Code",
            "time": "Event Start Time (e.g., YYYY-MM-DD 1500)",
            "duration": "Event Duration (e.g., 0200)",
            "location": "Desired Location"
        }
        self.entries = {}

        for key, label in self.fields.items():
            self.add_input_field(key, label)

        # Submit Button
        self.submit_button = ctk.CTkButton(
            self, 
            text="Submit", 
            command=self.submit_form, 
            font=("Arial", 16, "bold")
        )
        self.submit_button.pack(pady=20)

    def add_input_field(self, field_name, label_text):
        """Create a labeled input field."""
        frame = ctk.CTkFrame(self)
        frame.pack(pady=10, fill="x", padx=20)
        
        label = ctk.CTkLabel(frame, text=label_text, font=("Arial", 14))
        label.pack(side="left", padx=10)

        entry = ctk.CTkEntry(frame, placeholder_text=label_text)
        entry.pack(side="right", padx=10, fill="x", expand=True)
        self.entries[field_name] = entry

    def submit_form(self):
        """Collect and process user input and store it in DynamoDB."""
        form_data = {}
        for key, entry in self.entries.items():
            value = entry.get().strip()
            if not value:
                messagebox.showerror("Error", f"Please fill out the '{self.fields[key]}' field.")
                return
            form_data[key] = value
        
        # Convert data types as needed (e.g., for dates and times)
        try:
            # Insert data into the DynamoDB table
            self.table.put_item(
                Item={
                    "event_name": form_data["event"],
                    "professor_name": form_data["prof"],
                    "professor_email": form_data["prof_em"],
                    "Program": form_data["program"],
                    "course_code": form_data["course"],
                    "Timeslot": form_data["time"],
                    "duration": form_data["duration"],
                    "Location": form_data["location"]
                }
            )
            messagebox.showinfo("Form Submitted", "Your event details have been submitted successfully!")
            print("Submitted Data:", form_data)  # Replace with actual handling logic
        except ClientError as e:
            messagebox.showerror("Submission Error", f"Failed to submit data: {e.response['Error']['Message']}")
            print("Error:", e.response['Error']['Message'])


# Create a DynamoDB resource and run the app
if __name__ == "__main__":
    dynamo_db_resource = boto3.resource('dynamodb', region_name='us-west-2')  # Replace with your region
    app = EventBookingApp(dynamo_db_resource)
    app.mainloop()