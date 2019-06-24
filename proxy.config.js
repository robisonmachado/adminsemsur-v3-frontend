const proxy = [
    {
      context: 'http://127.0.0.1:4200/login',
      target: 'http://127.0.0.1:8000/adminsemsur3/client_secret',
    }
  ];

  
  module.exports = proxy;