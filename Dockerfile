FROM node:22-alpine

WORKDIR /app

COPY --chown=node:node package.json server.js index.html ./
COPY --chown=node:node assets ./assets
COPY --chown=node:node about-healthy ./about-healthy
COPY --chown=node:node benefits ./benefits
COPY --chown=node:node companies ./companies
COPY --chown=node:node credits ./credits
COPY --chown=node:node former-members ./former-members
COPY --chown=node:node help-center ./help-center
COPY --chown=node:node insurance ./insurance
COPY --chown=node:node investors ./investors
COPY --chown=node:node medical-leave ./medical-leave
COPY --chown=node:node my-portal ./my-portal
COPY --chown=node:node retirees ./retirees
COPY --chown=node:node savings ./savings
COPY --chown=node:node social-support ./social-support
COPY --chown=node:node tourism ./tourism

USER node

EXPOSE 8080

CMD ["node", "server.js"]
