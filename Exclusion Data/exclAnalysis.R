 #clear workspace
rm(list=ls());

#set working directory
setwd('//Users/dfareri/Dropbox/Dominic/Adelphi_Teaching/EmergingScholars_2017_2018/3_2018')

#PrelimWTPdata<-read.table(file = 'PrelimData_updated_3_27_2018_final_20ss.csv', header = TRUE, sep = ',')
Exclusion_data<-read.table(file = 'Exclusion_AllData2-21-19.csv', header = TRUE, sep = ',')
Exclusion_data_wide<-read.table(file = 'Exclusion_Wide_Questionnaires.csv', header = TRUE, sep = ',')


t.test(PrelimWTPdata$chosentype[PrelimWTPdata$Condition==0],mu=.5,na.rm=TRUE)

t.test(PrelimWTPdata$chosenprice[PrelimWTPdata$chosenType==0],PrelimWTPdata$chosen.price[PrelimWTPdata$chosenType==1])

t.test(PrelimWTPdata$chosenprice[PrelimWTPdata$Condition==0 & PrelimWTPdata$chosentype==1],PrelimWTPdata$chosenprice[PrelimWTPdata$Condition==0 & PrelimWTPdata$chosentype==0])


t.test(PrelimWTPdata$social.over.non,PrelimWTPdata$nonsocial.over.social,paired = TRUE)


subj = c("exc1",
         "exc2",
         "exc3",
         "exc4",
         "exc5",
         "exc6",
         "exc7",
         "exc8",
         "exc9",
         "exc10",
         "exc11",
         "exc12",
         "exc13",
         "exc14",
         "exc15",
         "exc16",
         "exc17",
         "exc18",
         "exc19",
         "exc20",
         "exc21",
         "exc22",
         "exc23",
         "exc24",
         "exc25",
         "exc26",
         "exc27",
         "exc28",
         "exc29",
         "exc30");

nsubj=length(subj)
trial=(1:50)
ntrial=length(trial)

PrelimWTPdata_wide<-data.frame(matrix(NA,nrow=20,ncol=16))
PrelimWTPdata_wide$Subject<-unique(PrelimWTPdata$Subject)

for(i in 1:nsubj){
  meanSocvsNon<-mean(PrelimWTPdata$social_vs_non[PrelimWTPdata$Subject==subj[i]],na.rm = TRUE)
  #print(meanSocvsNon)
  PrelimWTPdata_wide$SocvsNon[PrelimWTPdata_wide$Subject==subj[i]]<-meanSocvsNon
  
  meanNonvsSoc<-mean(PrelimWTPdata$nonsocial_vs_social[PrelimWTPdata$Subject==subj[i]],na.rm = TRUE)
  #print(meanNonvsSoc)
  PrelimWTPdata_wide$NonvsSoc[PrelimWTPdata_wide$Subject==subj[i]]<-meanNonvsSoc
  
  meanSpentSoc<-mean(PrelimWTPdata$chosenprice[PrelimWTPdata$Condition==0 & PrelimWTPdata$chosentype==1 & PrelimWTPdata$Subject==subj[i]],na.rm = TRUE)
  #print(meanSpentSoc)
  PrelimWTPdata_wide$AmtSpentSoc[PrelimWTPdata_wide$Subject==subj[i]]<-meanSpentSoc

  meanSpentNonSoc<-mean(PrelimWTPdata$chosenprice[PrelimWTPdata$Condition==0 & PrelimWTPdata$chosentype==0 & PrelimWTPdata$Subject==subj[i]],na.rm = TRUE)
  print(meanSpentNonSoc)
  PrelimWTPdata_wide$AmtSpentNonSoc[PrelimWTPdata_wide$Subject==subj[i]]<-meanSpentNonSoc
  
}

for(i in 1:nsubj){
  Exclusion_data$AQ[Exclusion_data$Subject==subj[i]]<-Exclusion_data_wide$AQ[Exclusion_data_wide$Subject==subj[i]]
  Exclusion_data$RSE[Exclusion_data$Subject==subj[i]]<-Exclusion_data_wide$RSE[Exclusion_data_wide$Subject==subj[i]]
}



PrelimWTPdata_SNSOnly<-PrelimWTPdata[PrelimWTPdata$Condition==0,]

write.table(x = PrelimWTPdata_SNSOnly,file = "PrelimWTPdata_SNSOnly.csv",sep = ",",col.names = TRUE)


