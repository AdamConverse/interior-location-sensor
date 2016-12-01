import requests
import serial
import json


# CONFIG VARS
baud_rate = 9600
serial_location = '/dev/cu.usbmodem1421'

# ser = serial.Serial(serial_location, baud_rate)
ser = "2,4,100"


if __name__ == '__main__':
    while True:
        print ser
        data = ser.split(",")

        payload = {'rinches': str(data[0]), 'linches': str(data[1]), 'angle': str(data[2])}

        r = requests.post("https://serene-reaches-34295.herokuapp.com/",
                data = json.dumps(payload),
                headers = {'Content-type': 'application/json'})
        exit()
