FROM golang:1.20-alpine3.18 AS build

WORKDIR /usr/src/app

COPY . .

RUN go mod init hello && go build -ldflags "-w"

FROM scratch

WORKDIR /usr/app

COPY --from=build /usr/src/app/hello .

CMD [ "./hello" ]