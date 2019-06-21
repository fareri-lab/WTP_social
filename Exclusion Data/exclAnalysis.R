 #clear workspace
rm(list=ls());

#set working directory
setwd('//Users/dfareri/Dropbox/Dominic/Github/fareri-lab/WTP_social/Exclusion')

#PrelimWTPdata<-read.table(file = 'PrelimData_updated_3_27_2018_final_20ss.csv', header = TRUE, sep = ',')
Exclusion_data_new<-read.table(file = 'WTP_Exclusion_2-21-19_DF.csv', header = TRUE,sep=',')
Exclusion_data_wide<-read.table(file = 'Exclusion_Wide_Questionnaires.csv', header = TRUE, sep = ',')
Exclusion_exc12<-read.table(file = 'exc12.csv', header = TRUE,sep=',')


t.test(PrelimWTPdata$chosentype[PrelimWTPdata$Condition==0],mu=.5,na.rm=TRUE)

t.test(PrelimWTPdata$chosenprice[PrelimWTPdata$chosenType==0],PrelimWTPdata$chosen.price[PrelimWTPdata$chosenType==1])

t.test(PrelimWTPdata$chosenprice[PrelimWTPdata$Condition==0 & PrelimWTPdata$chosentype==1],PrelimWTPdata$chosenprice[PrelimWTPdata$Condition==0 & PrelimWTPdata$chosentype==0])


t.test(PrelimWTPdata$social.over.non,PrelimWTPdata$nonsocial.over.social,paired = TRUE)


subj = c("1",
         "2",
         "3",
         "4",
         "5",
         "6",
         "7",
         "8",
         "9",
         "10",
         "11",
         "12",
         "13",
         "14",
         "15",
         "16",
         "17",
         "18",
         "19",
         "20",
         "21",
         "22",
         "23",
         "24",
         "25",
         "26",
         "27",
         "28",
         "29",
         "30");

nsubj=length(subj)
trial=(1:50)
ntrial=length(trial)

PrelimWTPdata_wide<-data.frame(matrix(NA,nrow=20,ncol=16))
PrelimWTPdata_wide$Subject<-unique(PrelimWTPdata$Subject)

for(i in 1:nsubj){
  #meanSocvsNon<-mean(PrelimWTPdata$social_vs_non[PrelimWTPdata$Subject==subj[i]],na.rm = TRUE)
  #print(meanSocvsNon)
  #PrelimWTPdata_wide$SocvsNon[PrelimWTPdata_wide$Subject==subj[i]]<-meanSocvsNon
  
  #meanNonvsSoc<-mean(PrelimWTPdata$nonsocial_vs_social[PrelimWTPdata$Subject==subj[i]],na.rm = TRUE)
  #print(meanNonvsSoc)
  #PrelimWTPdata_wide$NonvsSoc[PrelimWTPdata_wide$Subject==subj[i]]<-meanNonvsSoc
  
  #meanSpentSoc<-mean(PrelimWTPdata$chosenprice[PrelimWTPdata$Condition==0 & PrelimWTPdata$chosentype==1 & PrelimWTPdata$Subject==subj[i]],na.rm = TRUE)
  #print(meanSpentSoc)
  #PrelimWTPdata_wide$AmtSpentSoc[PrelimWTPdata_wide$Subject==subj[i]]<-meanSpentSoc

  #meanSpentNonSoc<-mean(PrelimWTPdata$chosenprice[PrelimWTPdata$Condition==0 & PrelimWTPdata$chosentype==0 & PrelimWTPdata$Subject==subj[i]],na.rm = TRUE)
  #print(meanSpentNonSoc)
  #PrelimWTPdata_wide$AmtSpentNonSoc[PrelimWTPdata_wide$Subject==subj[i]]<-meanSpentNonSoc
  
  AmtChange_PrevPost_SvNS<-mean((Exclusion_data_new$Spre.social..SvNS.[Exclusion_data_new$ChoiceCondition==0 & Exclusion_data_new$Subject==subj[i]])-(Exclusion_data_new$X.Post.social..NvS.[Exclusion_data_new$ChoiceCondition==0 & Exclusion_data_new$Subject==subj[i]]),na.rm=TRUE)
  print(AmtChange_PrevPost_SvNS)
  Exclusion_data_wide$AmtChange_PrevPost_SvNS[Exclusion_data_wide$Subject==subj[i]]<-AmtChange_PrevPost_SvNS
}

for(i in 1:nsubj){
  #Exclusion_data$AQ[Exclusion_data$Subject==subj[i]]<-Exclusion_data_wide$AQ[Exclusion_data_wide$Subject==subj[i]]
  #Exclusion_data_new$RSE[Exclusion_data$Subject==subj[i]]<-Exclusion_data_wide$RSE[Exclusion_data_wide$Subject==subj[i]]
  Exclusion_data_new$RSE_centered[Exclusion_data_new$Subject==subj[i]]<-(Exclusion_data_new$rse[Exclusion_data_new$Subject==subj[i]] - (mean(Exclusion_data_new$rse,na.rm=TRUE)))
  }

#mean center self-esteem


PrelimWTPdata_SNSOnly<-PrelimWTPdata[PrelimWTPdata$Condition==0,]

write.table(x = PrelimWTPdata_SNSOnly,file = "PrelimWTPdata_SNSOnly.csv",sep = ",",col.names = TRUE)


