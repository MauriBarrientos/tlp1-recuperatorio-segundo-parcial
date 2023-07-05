-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-07-2023 a las 21:57:53
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `destino` varchar(255) NOT NULL,
  `fechaSalida` date NOT NULL,
  `fechaRegreso` date NOT NULL,
  `codigoReserva` varchar(255) NOT NULL DEFAULT '1688586891257',
  `estado` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`id`, `nombre`, `apellido`, `email`, `destino`, `fechaSalida`, `fechaRegreso`, `codigoReserva`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'MAURICIO JUAN', 'BARRIENTOS', 'mauribarrientos23@gmail.com', 'Miami', '2023-05-23', '2023-05-26', '1688581811105', 0, '2023-07-05 18:32:26', '2023-07-05 18:58:58', NULL),
(2, 'Juan', 'Mendez', 'juanamendez@yahoo.es', 'Buenos Aires', '2023-05-23', '2023-04-26', '1688583430209', 0, '2023-07-05 18:59:30', '2023-07-05 19:26:41', NULL),
(3, 'Anibal', 'Vallejos', 'anibalvall@gmail.com', 'Cordoba', '2024-07-26', '2024-08-26', '1688584655369', 0, '2023-07-05 19:23:31', '2023-07-05 19:26:45', NULL),
(4, 'Juliana', 'Rodriguez', 'julirod@gmail.com', 'Ushuaia', '2023-07-25', '2023-08-27', '1688584655369', 0, '2023-07-05 19:24:06', '2023-07-05 19:26:49', NULL),
(5, 'MAURICIO JUAN', 'BARRIENTOS', 'mauribarrientos23@gmail.com', 'Cordoba', '2024-05-23', '2024-05-29', '1688585109612', 0, '2023-07-05 19:25:27', '2023-07-05 19:26:53', NULL),
(6, 'MAURICIO JUAN MANUEL', 'BARRIENTOS', 'mauribarrientos23@gmail.com', 'Ushuaia', '2023-07-06', '2023-07-14', '1688585499727', 1, '2023-07-05 19:31:59', '2023-07-05 19:53:11', NULL),
(7, 'Juliana', 'Rodriguez', 'julirod@gmail.com', 'Cordoba', '2023-07-24', '2023-07-27', '1688585499727', 1, '2023-07-05 19:32:12', '2023-07-05 19:32:12', NULL),
(8, 'Anibal', 'Vallejos', 'anibalvall@gmail.com', 'Buenos Aires', '2023-07-27', '2023-07-13', '1688585499727', 1, '2023-07-05 19:32:28', '2023-07-05 19:32:28', NULL),
(9, 'Maura', 'Baez', 'mauro@gmail.com', 'Lujan', '2023-07-21', '2023-07-28', '1688586891257', 0, '2023-07-05 19:57:13', '2023-07-05 19:57:27', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
