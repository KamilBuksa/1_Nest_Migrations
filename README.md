# 1_Nest_Migrations


## Instruction for migrations vie typeorm 

### Stps
1. Turn off synchronize 

## 2 ways of doing migrations
### First way - through npx  ----- typeorm-cli.config.ts -----
// Run migration(s) 
npx typeorm migration:run -d dist/typeorm-cli.config

// REVERT migration(s)
npx typeorm migration:revert -d dist/typeorm-cli.config

// Let TypeOrm generate migrations (for you)
npx typeorm migration:generate src/migrations/SchemaSync -d dist/typeorm-cli.config

### Second way - through scripts ----- typeOrm.config.ts ------

// 1 . GENERATE
// npm run typeorm:generate-migration --name=AritcleItems

// 2 RUN 
// npm run typeorm:run-migrations

// 3 REVERT
// npm run typeorm:revert-migration

// 4. CREATE
// npm run typeorm:create-migration --name=PostCreationDate          



## Importants:
1. Auto generated migrations do not work to changing columns!!!!
2. before run migrations - npm run build