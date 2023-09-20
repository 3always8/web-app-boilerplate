FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install pip, virtualenv, and create a virtual environment
RUN python -m pip install --upgrade pip
RUN pip install virtualenv
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Set the working directory in the container
WORKDIR /usr/src/api

# Copy the requirements files to the container
COPY requirements.txt ./

# Install the app's dependencies using pip
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

# Copy the rest of the app's files to the container
COPY . .

# Run migrations, collect static files, and load data
RUN python3 manage.py migrate
RUN python3 manage.py collectstatic --noinput