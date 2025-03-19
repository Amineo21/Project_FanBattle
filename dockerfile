# Utiliser l'image PHP officielle avec PHP 8.2
FROM php:8.2-cli

# Installer les extensions nécessaires pour Laravel et la gestion des images (GD), ainsi que d'autres utilitaires
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    git \
    curl \
    libxml2-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql xml \
    && rm -rf /var/lib/apt/lists/*

# Installer Composer globalement
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installer Node.js et npm pour React
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Définir le répertoire de travail
WORKDIR /var/www

# Copier tout le projet dans le conteneur
COPY . /var/www

# Vérifier les fichiers
RUN ls -la /var/www
RUN ls -la /var/www/fanbattle

# Installer les dépendances Composer si composer.json est présent
RUN test -f /var/www/composer.json && composer install --no-dev --optimize-autoloader || echo "composer.json introuvable, Composer ignoré"

# Installer les dépendances Node.js seulement si package.json existe
RUN test -f /var/www/fanbattle/package.json && npm install --prefix /var/www/fanbattle --force || echo "package.json introuvable, npm install ignoré"

# Construire l'application React si package.json existe
RUN test -f /var/www/fanbattle/package.json && npm run build --prefix /var/www/fanbattle || echo "package.json introuvable, build ignoré"

# Donner les bonnes permissions aux fichiers Laravel et React
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache /var/www/fanbattle/build

# Exposer les ports
EXPOSE 9000 3000

# Démarrer le serveur PHP avec Artisan et servir le frontend React via un serveur statique
CMD php artisan serve --host=0.0.0.0 --port=9000
