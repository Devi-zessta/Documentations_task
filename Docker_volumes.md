Tasks on docker volumes -

1. Use volume flag to mount your local files into the container.

create an image using command *docker build -t image:volume .*

*docker run -p 3000:80 -d  -v C:\node3\feedback:/app/feedback image*

This will create a new container from the 'image' image, and mount the feedback directory in your current working directory to the /app/ directory inside the container. Any changes made to files in the mydata directory on the host will be reflected inside the container, and vice versa.

2. Create a volume and run a container by attaching the volume to it. Inspect the volume to know the path and other information about the volume.

->create an image using command *docker build -t image:volume .*

->volume can be created using the following command

*docker volume create myvolume 

->To run a container by attaching the volume to it use the following command

*docker run -v /myvolume:/app/feedback image*

->To Inspect the volume use the following command

*docker volume inspect myvolume*

This will display a JSON-formatted description of the volume, including information such as the volume's name, driver, mount point, and labels.

3. Build an image and check how the data is getting persisted using named volumes and anonymous volumes.
->an image can be build using command: *docker build -t feedback:volumes .*
->an anonymous volume is a type of volume that is automatically created by Docker when a container is started, without the need for the user to explicitly specify a volume. Anonymous volumes are created when a container is started with the -v or --mount flag, followed by a destination path in the container file system, but without specifying a source path.

For example, the following command will start a container with an anonymous volume mounted at the /app/feedback directory in the container:

*docker run -v /app/feedback image*

In this case, Docker will create a new anonymous volume and mount it at the /app/feedback directory in the container. The data stored in this volume will persist across container restarts, but will be deleted when the container is removed.Anonymous volumes are useful for storing data that is specific to a particular container and that does not need to be shared with other containers or with the host system. They can also be used for temporary storage, caching, and other purposes where persistence is not required.

->Named volumes in Docker are a way to manage persistent data that is shared across one or more containers. A named volume is created and managed by Docker, and is identified by a user-defined name. This name can be used to refer to the volume when mounting it in a container.Named volumes are designed to be independent of the container's lifecycle, which means that they can persist even if the container is deleted or recreated.

*docker run -v myvolume:/app/feedback image*

->difference between anonymous volume and named volume
  anonymous volume:
        1)anonymous volumes are deleted because they are recreated whenever a container is created.
        2)anonymous volumes are attached to one specific container.
  named volume:
        1)named volumes will not be deleted by docker when container shuts down.
        2)named volumes are not attached to a container.


4. Reflect the changes in the container without building the image again using bind mounts.


*docker run -p 3000:80 -d  --rm --name container -v feedback:/app/feedback -v "C:\node3:/app" -v /app/node_modules image:volumes*

This will create a new container from the 'image' image, and mount the 'node3' directory in your current working directory to the /app/ directory inside the container. Any changes made to files in the 'node3' directory on the host will be reflected inside the container.