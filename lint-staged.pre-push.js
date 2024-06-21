module.exports = {
  "./**/*.{tsx,jsx,ts,js,json,md,yml}": ["yarn prettier --check . '!**/database' '!**/mongodb/mongodb'"],
  "**/*.{tsx,ts,jsx,js}": ["yarn eslint --ext .ts,.tsx,.js,.jsx --fix"],
}
