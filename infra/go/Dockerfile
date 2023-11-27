# ベースイメージ
FROM golang:1.21-alpine AS build

# 作業ディレクトリの作成
WORKDIR /app

# 必要なパッケージをインストール
RUN apk update && \
    apk add --no-cache \
    git \
    openssh-client \
    curl \
    bash \
    jq \
    && rm -rf /var/cache/apk/*

COPY go/go.mod go/go.sum ./
RUN go mod download

# ホットリロード用ツール
RUN go install github.com/cosmtrek/air@latest

CMD ["air", "-c", ".air.toml"]
