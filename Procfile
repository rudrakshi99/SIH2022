release: python manage.py migrate
web: gunicorn config.asgi:application -k uvicorn.workers.UvicornWorker
worker: REMAP_SIGTERM=SIGQUIT celery -A config.celery_app worker --loglevel=info
beat: REMAP_SIGTERM=SIGQUIT celery -A config.celery_app beat --loglevel=info
