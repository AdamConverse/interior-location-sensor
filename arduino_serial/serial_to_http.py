import requests
import serial
import json


# CONFIG VARS
baud_rate = 9600
serial_location = '/dev/cu.usbmodem1411'

ser_in = serial.Serial(serial_location, baud_rate)
s = requests.Session()


if __name__ == '__main__':
    i = 0
    while True:
        try:
            if i%10 is 0:
                data = ser_in.readline()[:-1].split(",")
                print data
                payload = {'rinches': str(data[0]), 'linches': str(data[1]), 'angle': str(data[2])}
                r = s.post("http://localhost:3000/arduino-1/",
                        data = json.dumps(payload),
                        headers = {'Content-type': 'application/json'})
        except:
            i = i + 1
