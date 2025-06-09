FROM eclipse-temurin:17-jdk-alpine AS build

WORKDIR /app
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
RUN chmod +x ./gradlew
RUN ./gradlew dependencies --no-daemon

COPY src src
RUN ./gradlew clean bootJar -x test --no-daemon

FROM eclipse-temurin:17-jre-alpine

WORKDIR /app
RUN apk add --no-cache tzdata
ENV TZ=Asia/Seoul

RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

COPY --from=build /app/build/libs/*.jar app.jar
RUN chown appuser:appgroup app.jar

USER appuser

ENV JAVA_OPTS="-Xmx512m -Xms256m -XX:+UseG1GC -XX:MaxGCPauseMillis=200"
ENV SPRING_PROFILES_ACTIVE=prod

EXPOSE 8080 8082

HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:${SERVER_PORT:-8080}/actuator/health || exit 1

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]