export default {
  default: {
    login: 'Login',
    logout: 'Logout',
    navigation: {
      stats: 'Statistics'
    },
    welcome: {
      navigate: 'Open',
      stats: {
        title: 'Exam statistics',
        text: 'Control your progress here'
      }
    },
    breadcrumbs: {
      statistics: 'Exam statistics',
      exams: 'Exams'
    },
    statistics: {
      topicList: {
        header:
          'Stats topics: a larger portion of the graph corresponds to better preparation.'
      },
      topicSingle: {
        header:
          'List of questions for the selected topic which has not yet been answered correctly.'
      },
      period: {
        all: 'All',
        current: 'Today',
        week: 'Week',
        week3: 'Week 3'
      },
      summaryChart: {
        attempt: 'Attempt {{attempt}}',
        validAnswers: 'Valid answers'
      }
    },
    exam: {
      status: {
        passed: 'Exam passed!',
        failed: 'Exam failed',
        'in-progress': 'Exam in progress...',
        expired: 'Time for answers expired!'
      },
      invalidAnswersCount: 'Invalid answers count',
      goToExamStatistics: 'Go to exam statistics',
      backToQuestions: 'Back to questions',
      finishExam: 'Finish exam'
    },
    form: {
      field: {
        required: 'Required',
        passwordMinLength: 'Password must be longer than 3 symbols'
      }
    },
    button: {
      create: 'Create',
      cancel: 'Cancel'
    },
    student: {
      editorHeader: 'Add new student',
      editor: {
        header: 'Add new student',
        label: {
          name: 'Name',
          surname: 'Surname',
          login: 'Login',
          email: 'E-Mail',
          passwd: 'Password'
        }
      }
    },
    school: {
      stats: {
        guestVisits: 'Guest visits',
        exams: 'Exams',
        bestStudents: 'Best students',
        worstStudents: 'Worst students',
        topics: 'Topics'
      }
    }
  }
}
