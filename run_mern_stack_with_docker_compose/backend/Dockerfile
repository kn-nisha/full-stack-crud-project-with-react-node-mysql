



# Stage 1: Build the Node.js backend app
FROM node:18-alpine3.20 AS build



# Set the working directory inside the container
WORKDIR /app



# 🚫 ERROR 1: Copy non-existent file to trigger COPY failure
COPY package.json package-lock.json yarn.lock ./
# → If you don’t have yarn.lock, this will fail if Docker strict COPY is enforced
# → Also, if package-lock.json doesn’t exist, this fails too



# 🚫 ERROR 2: Run invalid shell command before install
RUN ech "💥 This command is misspelled on purpose!" && exit 1
# → 'ech' instead of 'echo' → command not found → build fails



# Install dependencies — will never reach here due to above error
RUN npm install



# 🚫 ERROR 3: Copy from invalid source (non-existent directory)
COPY ./src-invalid ./src
# → If you don’t have a folder called "src-invalid", this fails



# 🚫 ERROR 4: Use invalid Dockerfile syntax — malformed ARG
ARG PORT==3000
# → Double equals is invalid syntax → Docker build parser will choke here



# Expose the port — may never reach here
EXPOSE 3000



# Define the build-time arguments with default values
ARG DB_HOST
ARG DB_USER
ARG DB_PASSWORD
ARG DB_DATABASE
ARG DB_TABLENAME="users"
ARG DB_WAITFORCONNECTIONS=true
ARG DB_CONNECTIONLIMIT=10
ARG DB_QUEUELIMIT=0



# 🚫 ERROR 5: Invalid ENV assignment (using := instead of =)
ENV PORT:=$PORT
# → Docker doesn’t support := syntax → parse error



# Pass ARG values to ENV so they are accessible during runtime
ENV DB_HOST=$DB_HOST
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_DATABASE=$DB_DATABASE
ENV DB_TABLENAME=$DB_TABLENAME
ENV DB_WAITFORCONNECTIONS=$DB_WAITFORCONNECTIONS
ENV DB_CONNECTIONLIMIT=$DB_CONNECTIONLIMIT
ENV DB_QUEUELIMIT=$DB_QUEUELIMIT



# 🚫 ERROR 6: Reference undefined ARG/ENV in CMD (but this won’t fail build, so we add a RUN to force fail)
RUN if [ -z "$DB_HOST" ]; then echo "💥 DB_HOST is required but not set!" >&2; exit 1; fi
# → Fails build if DB_HOST is not passed via --build-arg



# 🚫 ERROR 7: Use non-existent npm script
CMD ["npm", "run", "start-server-now"]
# → This won’t fail during BUILD, but if you want build failure, combine with:
# RUN npm run start-server-now
# → Uncomment below to make it fail at build time:



# RUN npm run start-server-now
# → Fails if script doesn’t exist in package.json




