// 1 . Attendance Collection

db.attendance.insertOne({attendanceStatus:"Attended",attendanceDate:20/07/2020})

// 2.  CompanyDrives Collection

db.companyDrives.insertOne(
    {companyName:"Paypal",companyDriveDate:28/10/2020,companyID:10,companyType:"Product Based"}
    )

// 3.  Courses Collection

db.courses.insertOne(
    {courseName:"MongoDB",courseCategory:"Database",courseDuration:3,courseAuthorName:"Venkat Sir"}
    )

// 4.  Tasks Collection

db.dailyTasks.insertOne(
        {taskName:"MongoDB",taskType:"Daily Task",taskGivenDate:11/09/2020,taskDeadline:12/09/2020,taskUrl:"www.guvi.in/demo_url"}
        )

// 5.  Mentors Collection 

db.mentors.insertOne({mentorName:"Venkat sir",mentorEmail:"venkat@guvi.in",studentsCountForMentors:3})

// 6.  Students Collection

db.students.insert({
	name:"Siddhant",
	email:"sid10on10@gmail.com",
	mobile:8756196694,
	dob:19/12/1997,
	occupation:"Engineer"
})

// 7.  Codekata Collection

db.codekata.insertOne({codekataCategoryName:"Arrays",codekataQuestioId:10,codekataQuestionStatus:"Solved"})