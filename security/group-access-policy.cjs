'use strict';
const sensitive=new Set(['secrets.read','secrets.write','users.manage','database.export']);
function authorize({actor,group,permission,companyId,subjectId}) {
 if(!actor||actor.active!==true||actor.suspended||!permission)return false;
 if(actor.expiresAt&&Date.parse(actor.expiresAt)<=Date.now())return false;
 if(actor.isOwner===true)return true;
 if((actor.denies||[]).includes(permission)||(group?.denies||[]).includes(permission))return false;
 if(permission==='group.members.manage')return Boolean(group&&Number(group.managerUserId)===Number(actor.id)&&group.memberIds?.includes(Number(subjectId)));
 if(sensitive.has(permission)&&!(actor.permissions||[]).includes(permission))return false;
 if(sensitive.has(permission)&&actor.sensitiveApproved!==true)return false;
 if(!(actor.permissions||[]).includes(permission)&&!(group?.permissions||[]).includes(permission))return false;
 if(companyId!=null){
  if(!(actor.companyIds||[]).map(Number).includes(Number(companyId)))return false;
  if(group?.companyIds&&!group.companyIds.map(Number).includes(Number(companyId)))return false;
 }
 return true;
}
module.exports={authorize};
