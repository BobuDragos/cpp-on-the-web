FROM gcc:latest

WORKDIR /app

COPY script.cpp .

RUN g++ -o script script.cpp

CMD ["./script"]

