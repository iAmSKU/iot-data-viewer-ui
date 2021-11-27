rm -rf iot-data-viewer-ui.tar
docker rmi iot-data-viewer-ui:0.0.1

docker build -f Dockerfile . -t iot-data-viewer-ui:0.0.1

docker save -o iot-data-viewer-ui.tar iot-data-viewer-ui:0.0.1
chmod 755 iot-data-viewer-ui.tar
