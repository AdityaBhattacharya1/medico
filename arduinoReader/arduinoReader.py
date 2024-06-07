import requests
import serial
# Set up the serial connection
arduino_port = "COM9"  # Change this to your Arduino's port (e.g., COM3)
baud_rate = 115200
ser = serial.Serial(arduino_port, baud_rate)
jwt_token = ""
# URLs to make the request to
# 1. JWT Token middleman url
jwt_url = "http://localhost:4000"

# 2. mongo db interact url
db_layer_url = "http://localhost:3000"


while True:
        data = int(ser.readline().decode().strip())
        print(data, type(data))
        if data > 150:
             data //= 2

        res = requests.get(f"{jwt_url}/get_token").json()

        jwt_token = res.get("token", "")
        user_id = res.get("userId", "")
        # print("token", jwt_token)
        # print("userId", user_id)

        response = requests.post(f"{db_layer_url}/user/data", json={"field1": data, "clerkUserId": jwt_token, "userId": user_id}, headers = {
        "Authorization": f"Bearer {jwt_token}",
        "Content-type": "application/json",
    })
        if response.status_code == 200:
            print("Data uploaded successfully")
        else:
            print(f"Failed to upload data: {response.content}")
