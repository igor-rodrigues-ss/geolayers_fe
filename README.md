
# GeoLayers Frontend

## Frontend for Rest API using Python and FastAPI For Processing Geospatial Layers

### OS
- Linux

### Used Tools:
- Typescript
- ReactJS
- yarn

### Features
- Shapefile Upload
- Mapbox Vector Tile Generator
- Download shapefile templates
- View executing uploads

### Requirements in O.S
- npm or yarn

### Development Mode
```shell
cd /path/to/geolayers_fe

# install all dependencies
yarn # or npm install

# Starting App
yarn start # or npm start

# Access: http://localhost:3000
```

## Deploy

- All the artifacts for application deploy (for both frontend and backend) are in [geolayer_deploy](https://github.com/igor-rodrigues-ss/geolayers_deploy) project.

- The next tutorial will deploy frontend and backend already integrateds.


### Requirements
- git: 2.25.1
- Docker: 20.10.6, build 370c289
- Docker-compose: 1.28.5, build c4eb3a1f

```shell
git clone https://github.com/igor-rodrigues-ss/geolayers_deploy
cd geolayers_deploy
./deploy

# after deploying go to: http://localhost:3000
```