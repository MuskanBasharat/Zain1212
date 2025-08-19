"use client";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

interface PopupScreenProps {
  onClose: () => void;
}

export default function PopupScreen({ onClose }: PopupScreenProps) {
  const logo =
    "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/namelogo.png";
  const profile =
    "https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/30317595/cd5eba07.png";

  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timezone, setTimezone] = useState("Asia/Karachi");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState("calendar"); // calendar → time → form → success

  // form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    meetingType: "Zoom",
  });

  // splash
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // generate half-hour slots
  const generateTimeSlots = () => {
    const slots: string[] = [];
    let startHour = 9; // 9AM
    let endHour = 23; // 11PM
    for (let hour = startHour; hour <= endHour; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // send with Web3Forms
    const formPayload = {
access_key: "0a0a7458-ee91-47e4-b376-ede41212040b", 
     subject: "New Meeting Scheduled",
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      to_email: "zainali.professional@gmail.com",
      message: `
        A new meeting has been scheduled.
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Date: ${date?.toDateString()}
        Time: ${selectedTime} (${timezone})
        Meeting Type: ${formData.meetingType}
      `,
      cc_email: formData.email,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPayload),
    });

    if (res.ok) {
      setStep("success");
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        {loading ? (
          /* Splash */
          <div className="flex flex-col items-center justify-center flex-1 p-8">
            <img src={logo} alt="Logo" className="w-28 h-auto mb-6" />
            <div className="flex space-x-2">
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:200ms]"></span>
              <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:400ms]"></span>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6">
            {/* Permanent Logo + Profile */}
            <div className="flex flex-col items-center">
              <img src={logo} alt="Logo" className="w-24 h-auto mb-3" />
              <img
                src={profile}
                alt="Profile"
                className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-md mb-3"
              />
              <p className="text-center text-gray-700 mb-2">
                Welcome to my consultation booking page.  
                Please select a date, time, and fill the form to schedule.
              </p>
            </div>

            <hr className="my-4" />

            {/* Step Screens */}
            {step === "calendar" && (
              <>
                <h2 className="text-lg font-semibold mb-2">Select a Date</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(day) => day < new Date()} 
                  className="rounded-lg border w-full mb-4"
                />
                <button
                  disabled={!date}
                  onClick={() => setStep("time")}
                  className="w-full bg-blue-600 text-white p-2 rounded-lg"
                >
                  Next
                </button>
              </>
            )}

            {step === "time" && (
              <>
                <h2 className="text-lg font-semibold mb-2">Select a Time</h2>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {generateTimeSlots().map((slot) => (
                    <button
                      key={slot}
                      className={`p-2 border rounded-lg ${
                        selectedTime === slot
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setSelectedTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <button
                  disabled={!selectedTime}
                  onClick={() => setStep("form")}
                  className="w-full bg-blue-600 text-white p-2 rounded-lg"
                >
                  Next
                </button>
              </>
            )}

            {step === "form" && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold mb-2">Your Details</h2>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border p-2 mb-2 rounded-lg"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border p-2 mb-2 rounded-lg"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 mb-2 rounded-lg"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <select
                  className="w-full border p-2 mb-4 rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, meetingType: e.target.value })
                  }
                >
                  <option value="Zoom">Zoom</option>
                  <option value="Google Meet">Google Meet</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white p-2 rounded-lg"
                >
                  Schedule Meeting
                </button>
              </form>
            )}

            {step === "success" && (
              <div className="text-center p-6">
                <h2 className="text-xl font-semibold text-green-600 mb-2">
                  🎉 Meeting Scheduled!
                </h2>
                <p className="text-gray-700">
                  Your meeting on{" "}
                  <strong>
                    {date?.toDateString()} at {selectedTime} ({timezone})
                  </strong>{" "}
                  has been scheduled.
                </p>
                <p className="text-gray-500 mt-2">
                  Please check your email for confirmation.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
