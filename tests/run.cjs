const {spawnSync}=require('node:child_process');
for(const file of ['check-882.cjs','check-985.cjs','bootstrap.cjs']){const result=spawnSync(process.execPath,['tests/'+file],{stdio:'inherit'});if(result.status!==0)process.exit(result.status||1);}
