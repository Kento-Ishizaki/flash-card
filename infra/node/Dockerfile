# ベースイメージ
FROM node:21-alpine

# 作業ディレクトリ指定
WORKDIR /app

# 依存パッケージのインストール
COPY ./node/package.json ./node/package-lock.json ./
RUN npm install

# ソースコードのコピー
COPY ./node ./

CMD ["npm", "run", "dev"]]
