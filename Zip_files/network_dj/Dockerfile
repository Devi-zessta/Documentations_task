FROM  python:3.7.17-slim-bullseye

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

CMD ["python","manage.py","runserver"]


