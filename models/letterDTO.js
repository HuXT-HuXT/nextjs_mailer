class LetterDTO {
  constructor(event) {    
    this.subject = event.email.subject;    
    this.sendDatetime = event.email.sendDatetime;
    this.uuid = event.uuid;
    this.dashaId = '';
    this.status = 'DRAFT';    
    this.body = '';
  }
  
};

export default LetterDTO;