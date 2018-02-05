sudo: false
language: node_js
node_js:
- 8
before_install:
- npm install codecov.io coveralls
after_success:
- cat ./coverage/lcov.info | ./node_modules/codecov.io/bin/codecov.io.js
- cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
branches:
  only:
  - master
  - "/^greenkeeper/.*$/"
deploy:
  provider: npm
  email: emanuel.suriano@gmail.com
  api_key:
    secure: URyDInb/Pj4HFx4dMH3E4a7v4e0xQewtAtk4rjCmPOZfZGOztg/eMtzuG8EYpnDhq/kmOXmhAn1AH6z9facyrd8UtCihJKwAngdRZOGNE11bAglcAa/SN18yf1sBzrCwN42YTtXJgn3DmYUbKn8RiWL1mtUWLjJn/B2gUZoYvWwAAn3BoYdiLaQlGA75vKwqXa6RWwebsqUAPlBDlEYRmdwue672jamOisw8jXWujjHsHfOCJN9+mYtSUWrYqWfIl1jONVLsM6LWlFkng4sDC47u3KdL+XbEr2+befoXF1cCvOVX3VfRxw5PXbgakwZ2Fn1N63LY15l3QvfDm/DouuAToxBKb0urd4tlA1yzr4W8gqdMKy9Hf1JFxAjjo2LXoKcs68UTDRcmqHB5GDNH0GaGBTmfxebcMVVFcuwLK9ULe82OVXpx8JoiexNs/QrRyr87+CTu9sr+1KE7/8FCG6mOX93armP1fdWPZVPQquyYAYmXn6ELstBwL2MSzXd7LVVcKE43wYEWzlhsXe6zWLSvpfFhLSgAhh8DidwsJrRoMv7Ev01TRk2bdWrCdVD94OI5JMg4Xz+0rm1egVtwAhxeSTCYlmkWyrpJDCMFgeg3H1UwYNrXTP/V5PzMAgRXnpn4gWklV6VPVSVdwu09XPkjXJ/r0mql+FekJaHPQCg=
  on:
    tags: true
    repo: EmaSuriano/react-hotkey-tooltip
