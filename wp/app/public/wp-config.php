<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'bcUYyu1Jw5K0eL2IVkufwhZQr/zTft6v1o5hbiEpHhLMmwrHb2s5WSyuW6f9M1Kom0lAUUP5tYc3P9eY60xHUw==');
define('SECURE_AUTH_KEY',  'G0vCwxkxeIn6eydKDxtXjrWflI5uHWpAYCOfTWt6fBGP0kLSL/5dJfAIWataB9SIWB6N/dvqraCcEpOGxjVyQg==');
define('LOGGED_IN_KEY',    '8GA7csaBqFL4/2YwYa/uZ118OISSII6yn3SbtqAZ7R0dAYiP62ZdQ8IGb7+VLsTVNHtAOA7cT5zkmUL9iNKbXw==');
define('NONCE_KEY',        'YmXz3DdStgDM759K8ixt8aZmJQiXFoRdYFL42Li7xZq3rLNJ704UYuySwHpCW1StkACXvhVY5zUl1I4Qe0nGiQ==');
define('AUTH_SALT',        'zljf5+B7H3ggJ7OJaqvjBC5l1xIou4n67y+zwhaMhajl+5P3AgYD9ExSsGZzsNvVMWW0zvcS0vvwLzW6QHrfgw==');
define('SECURE_AUTH_SALT', 'iUf8wrQlpI0UNIUg1DA5gpz1MV7++8GDuivSuvHPB56ftOHALOUn8muJX5wLUgPxnjJifj6+aPplAedLGpNEMA==');
define('LOGGED_IN_SALT',   'Q6L07mjHo80giUvI6I+8l+wySUZIHEXu25jEneD4TlugpAe0FhFvfVSdX/XhAPBdH8C0o2xXAMGAulYytDmbFQ==');
define('NONCE_SALT',       'JqrNtxCKYkdeVsw4GYxnPyB56vfAf7xfVJWTuqGwP0YC41J50IPT4l0gmuafzRdFeRqXW1gkfvuuess6Sv6pPQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
