API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/sign-up"
  curl "${API}${URL_PATH}" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'",
        "password_confirmation": "'"${PASSWORD}"'"
      }
    }'

    #EMAIL=ava@bob.com PASSWORD=hannah scripts/sign-in-json.sh
