FROM python:3.8-slim-bullseye

WORKDIR /app

COPY . /app/

RUN pip install -r requirements.txt

#RUN python manage.py makemigrations && python manage.py migrate

CMD ["python","manage.py","runserver"]