#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE DATABASE api;
  GRANT ALL PRIVILEGES ON DATABASE api TO postgres;
EOSQL
