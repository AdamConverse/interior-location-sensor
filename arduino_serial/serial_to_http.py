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

        print json.dumps({
            "rinches": data[0],
            "linches": data[1],
            "angle":   data[2]
            })

        r = requests.post("https://serene-reaches-34295.herokuapp.com/",
                data=json.dumps({
                    "rinches": data[0],
                    "linches": data[1],
                    "angle":   data[2]
                    }),
                headers={'Content-type': 'application/json'})
