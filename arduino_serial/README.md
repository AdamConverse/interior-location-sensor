# Arduino serial HTTP request
Running the program will send comma separated values from Arduino serial to HTTP request.

# Requirements
The program supports Python 2.7.

## Python Install
### Mac OSX:
* [Homebrew](http://brew.sh/):
  - `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - Insert the Homebrew directory at the top of your PATH environment variable:
  - `$ nano ~/.profile`
  - Paste `export PATH=/usr/local/bin:/usr/local/sbin:$PATH` to top of file.
  - `$ brew install python`
* [Virtualenv install](http://docs.python-guide.org/en/latest/dev/virtualenvs/#virtualenvironments-ref)
  - `$ pip install virtualenv`

### Windows:
Please see [link](http://docs.python-guide.org/en/latest/starting/install/win/) for reference.
* [Download latest version of Python 2.7](https://www.python.org/ftp/python/2.7.12/python-2.7.12.msi)
* Install Setuptools and Pip
  - `$ python windows_setup/ez_setup.py`
* [Virtualenv install](http://docs.python-guide.org/en/latest/dev/virtualenvs/#virtualenvironments-ref)
  - `$ pip install virtualenv`

# Install
Run these commands in order to install the project.  On Windows, I would recommend downloading [cmdr](http://cmder.net/) to use as the terminal.

Open up your terminal and run these commands:
- `$ git clone https://github.com/AdamConverse/interior-location-sensor.git`
- `$ cd interior-location-sensor/arduino_serial`
- `$ virtualenv serial`
- `$ source serial/bin/activate`
  * `(serial)$ # Your prompt should change`
  * Stop virtual environment with `(serial)$ deactivate`
- `(serial)$ pip install -r requirements.txt`

# Setup
Open `serial_to_http.py` and change [line 7](https://github.com/AdamConverse/interior-location-sensor/blob/master/arduino_serial/serial_to_http.py#L7) to match Arduino port.

![alt text](assets/port.jpg "Port")
