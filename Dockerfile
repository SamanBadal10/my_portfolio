FROM php:8.1-cli

# Install extensions you need
RUN docker-php-ext-install mysqli

# Copy all project files
COPY . /var/www/html

# Set working directory
WORKDIR /var/www/html

# Expose the default PHP dev server port
EXPOSE 10000

# Start the PHP built-in server
CMD ["php", "-S", "0.0.0.0:10000", "-t", "."]
