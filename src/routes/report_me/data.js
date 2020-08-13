import _ from 'lodash';

const data = {

  UserName: '哈哈哈',
  Realm: '癌痛',

  Completions: 10,
  Incompletions: 10,
  Cancels: 10,

  Plans: 20,
  CompletionRate: 0.2,

  Chairmen: _.random(1, 20),
  Speakers: _.random(1, 20),
  Attendees: _.random(1, 20),
  SubstituteEvents: _.random(1, 20),
  SubstitutedEvents: _.random(1, 20),
  ActualEvents: _.random(1, 20),

  AreaAC: _.random(1, 20),
  AreaACChairmen: _.random(1, 20),
  AreaACSpeakers: _.random(1, 20),
  AreaACAttendees: _.random(1, 20),
  HospitalAC: _.random(1, 20),
  HospitalACChairmen: _.random(1, 20),
  HospitalACSpeakers: _.random(1, 20),
  HospitalACAttendees: _.random(1, 20),
  DepartmentAC: _.random(1, 20),
  DepartmentACChairmen: _.random(1, 20),
  DepartmentACSpeakers: _.random(1, 20),
  DepartmentACAttendees: _.random(1, 20),
  CityAC: _.random(1, 20),
  CityACChairmen: _.random(1, 20),
  CityACSpeakers: _.random(1, 20),
  CityACAttendees: _.random(1, 20),
  RoundTableAC: _.random(1, 20),
  RoundTableACChairmen: _.random(1, 20),
  RoundTableACSpeakers: _.random(1, 20),
  RoundTableACAttendees: _.random(1, 20),
  MundiNationalAC: _.random(1, 20),
  MundiNationalACChairmen: _.random(1, 20),
  MundiNationalACSpeakers: _.random(1, 20),
  MundiNationalACAttendees: _.random(1, 20),
  ThirdPartyAC: _.random(1, 20),
  ThirdPartyACChairmen: _.random(1, 20),
  ThirdPartyACSpeakers: _.random(1, 20),
  ThirdPartyACAttendees: _.random(1, 20),
  AbroadAC: _.random(1, 20),
  AbroadACChairmen: _.random(1, 20),
  AbroadACSpeakers: _.random(1, 20),
  AbroadACAttendees: _.random(1, 20),
  ExpertConf: _.random(1, 20),
  ExpertConfChairmen: _.random(1, 20),
  ExpertConfSpeakers: _.random(1, 20),
  ExpertConfAttendees: _.random(1, 20),
  AnesthesiologyTraining: _.random(1, 20),
  AnesthesiologyTrainingChairmen: _.random(1, 20),
  AnesthesiologyTrainingSpeakers: _.random(1, 20),
  AnesthesiologyTrainingAttendees: _.random(1, 20),
  BusinessConf: _.random(1, 20),
  BusinessConfChairmen: _.random(1, 20),
  BusinessConfSpeakers: _.random(1, 20),
  BusinessConfAttendees: _.random(1, 20),
  NoCancerPainWard: _.random(1, 20),
  NoCancerPainWardChairmen: _.random(1, 20),
  NoCancerPainWardSpeakers: _.random(1, 20),
  NoCancerPainWardAttendees: _.random(1, 20),
  DocContinuingEdu: _.random(1, 20),
  DocContinuingEduChairmen: _.random(1, 20),
  DocContinuingEduSpeakers: _.random(1, 20),
  DocContinuingEduAttendees: _.random(1, 20),
  MTMReviewMeeting: _.random(1, 20),
  MTMReviewMeetingChairmen: _.random(1, 20),
  MTMReviewMeetingSpeakers: _.random(1, 20),
  MTMReviewMeetingAttendees: _.random(1, 20),
  DeptRoundTableCaseReview: _.random(1, 20),
  DeptRoundTableCaseReviewChairmen: _.random(1, 20),
  DeptRoundTableCaseReviewSpeakers: _.random(1, 20),
  DeptRoundTableCaseReviewAttendees: _.random(1, 20),

  _subs: _.range(0, 6).map(index => {
    return {
      UserName: '哈哈哈',
      Realm: '癌痛',

      Completions: 10,
      Incompletions: 10,
      Cancels: 10,

      Plans: 20,
      CompletionRate: 0.2,

      Chairmen: _.random(1, 20),
      Speakers: _.random(1, 20),
      Attendees: _.random(1, 20),
      SubstituteEvents: _.random(1, 20),
      SubstitutedEvents: _.random(1, 20),
      ActualEvents: _.random(1, 20),

      AreaAC: _.random(1, 20),
      AreaACChairmen: _.random(1, 20),
      AreaACSpeakers: _.random(1, 20),
      AreaACAttendees: _.random(1, 20),
      HospitalAC: _.random(1, 20),
      HospitalACChairmen: _.random(1, 20),
      HospitalACSpeakers: _.random(1, 20),
      HospitalACAttendees: _.random(1, 20),
      DepartmentAC: _.random(1, 20),
      DepartmentACChairmen: _.random(1, 20),
      DepartmentACSpeakers: _.random(1, 20),
      DepartmentACAttendees: _.random(1, 20),
      CityAC: _.random(1, 20),
      CityACChairmen: _.random(1, 20),
      CityACSpeakers: _.random(1, 20),
      CityACAttendees: _.random(1, 20),
      RoundTableAC: _.random(1, 20),
      RoundTableACChairmen: _.random(1, 20),
      RoundTableACSpeakers: _.random(1, 20),
      RoundTableACAttendees: _.random(1, 20),
      MundiNationalAC: _.random(1, 20),
      MundiNationalACChairmen: _.random(1, 20),
      MundiNationalACSpeakers: _.random(1, 20),
      MundiNationalACAttendees: _.random(1, 20),
      ThirdPartyAC: _.random(1, 20),
      ThirdPartyACChairmen: _.random(1, 20),
      ThirdPartyACSpeakers: _.random(1, 20),
      ThirdPartyACAttendees: _.random(1, 20),
      AbroadAC: _.random(1, 20),
      AbroadACChairmen: _.random(1, 20),
      AbroadACSpeakers: _.random(1, 20),
      AbroadACAttendees: _.random(1, 20),
      ExpertConf: _.random(1, 20),
      ExpertConfChairmen: _.random(1, 20),
      ExpertConfSpeakers: _.random(1, 20),
      ExpertConfAttendees: _.random(1, 20),
      AnesthesiologyTraining: _.random(1, 20),
      AnesthesiologyTrainingChairmen: _.random(1, 20),
      AnesthesiologyTrainingSpeakers: _.random(1, 20),
      AnesthesiologyTrainingAttendees: _.random(1, 20),
      BusinessConf: _.random(1, 20),
      BusinessConfChairmen: _.random(1, 20),
      BusinessConfSpeakers: _.random(1, 20),
      BusinessConfAttendees: _.random(1, 20),
      NoCancerPainWard: _.random(1, 20),
      NoCancerPainWardChairmen: _.random(1, 20),
      NoCancerPainWardSpeakers: _.random(1, 20),
      NoCancerPainWardAttendees: _.random(1, 20),
      DocContinuingEdu: _.random(1, 20),
      DocContinuingEduChairmen: _.random(1, 20),
      DocContinuingEduSpeakers: _.random(1, 20),
      DocContinuingEduAttendees: _.random(1, 20),
      MTMReviewMeeting: _.random(1, 20),
      MTMReviewMeetingChairmen: _.random(1, 20),
      MTMReviewMeetingSpeakers: _.random(1, 20),
      MTMReviewMeetingAttendees: _.random(1, 20),
      DeptRoundTableCaseReview: _.random(1, 20),
      DeptRoundTableCaseReviewChairmen: _.random(1, 20),
      DeptRoundTableCaseReviewSpeakers: _.random(1, 20),
      DeptRoundTableCaseReviewAttendees: _.random(1, 20),

    }
  })

}

export default data;