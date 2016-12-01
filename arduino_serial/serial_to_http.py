import requests
import serial
import json


# CONFIG VARS
baud_rate = 9600
serial_location = '/dev/cu.usbmodem1421'

if __name__ == '__main__':
    while True:
        ser_in = serial.Serial(serial_location, baud_rate)
        print ser_in
        data = ser_in.split(",")

        payload = {'rinches': str(data[0]), 'linches': str(data[1]), 'angle': str(data[2])}

        r = requests.post("https://serene-reaches-34295.herokuapp.com/",
                data = json.dumps(payload),
                headers = {'Content-type': 'application/json'})
