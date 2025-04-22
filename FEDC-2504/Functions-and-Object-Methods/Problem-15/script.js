let sentenceBuilder ={
  subject: "I",
  verb: "am",
  object: "coding",
  buildSentence : function () {
    let sentence = (this.subject === "" || this.verb === "" || this.object === "") ? "Incomplete Sentence" :  this.subject + " " + this.verb + " " + this.object ;
    console.log(sentence);
    
  },
  updateProperty : function (property, value) {
    this.hasOwnProperty(property) ? this[property] = value : console.log("Invalid property");
  }
}

sentenceBuilder.buildSentence()
sentenceBuilder.updateProperty("verb", "am learning");
sentenceBuilder.updateProperty("verb", "is learning");
sentenceBuilder.updateProperty("subject", "The cat");
sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("mood", "happy");
