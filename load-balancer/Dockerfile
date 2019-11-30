FROM golang:1.12.7-alpine3.10 AS builder
ENV GO111MODULE on
ENV PLATFORM linux
ENV ARCH amd64

RUN apk add --no-cache git

# Directory in workspace
WORKDIR "/go/src/github.com/bulgaria-guide/load-balancer"

# Copy and build source code
COPY . ./

RUN go mod vendor

RUN go build .

###############################
# Build the runtime container
###############################
FROM alpine:3.10 AS runner

WORKDIR /app

COPY --from=builder /go/src/github.com/bulgaria-guide/load-balancer/application.yml /app/load-balancer/application.yml

# Copy the executable file
COPY --from=builder /go/src/github.com/bulgaria-guide/load-balancer/load-balancer /app/main


ENTRYPOINT [ "./main" ]