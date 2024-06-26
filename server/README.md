# Setting Up Code for Development

To get started with development on the server, follow the steps below:

1. Create a `.env` file in the `/server` directory and add your OpenAI API key. You can use the `.env.example` file as a template.

3. Create a virtual environment and activate it:
  ```
  python3 -m venv venv
  source venv/bin/activate
  ```

4. Install the required dependencies:
  ```
  pip install -r requirements.txt
  ```

5. Create a `.env` file in the root directory and add the necessary environment variables. You can use the `.env.example` file as a template.

6. Start the server:
  ```
  python app.py
  ```

7. Open your browser and visit `http://localhost:5000` to see the application running.

8. You're all set! Start coding and make any necessary changes.

Please note that this README assumes you have Python 3 and `pip` installed on your machine.
