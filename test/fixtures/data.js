var base = [
  {
    lessonID: 3,
    lessonLessonOrder: 1,
    lessonChapterOrder: 1,
    lessonName: 'Lesson 1a',
    lessonContent: 'test',
    lessonRead: false,
    lessonActive: true,
    chapterID: 1,
    chapterOrder: 1,
    chapterName: 'Functions and Loops',
    chapterRead: false
  },
  {
    lessonID: 2,
    lessonLessonOrder: 3,
    lessonChapterOrder: 3,
    lessonName: 'Lesson 1c',
    lessonContent: 'test',
    lessonRead: false,
    lessonActive: true,
    chapterID: 1,
    chapterOrder: 1,
    chapterName: 'Functions and Loops',
    chapterRead: false
  },
  {
    lessonID: 1,
    lessonLessonOrder: 2,
    lessonChapterOrder: 2,
    lessonName: 'Lesson 1b',
    lessonContent: 'test',
    lessonRead: false,
    lessonActive: true,
    chapterID: 1,
    chapterOrder: 1,
    chapterName: 'Functions and Loops',
    chapterRead: false
  },
  {
    lessonID: 6,
    lessonLessonOrder: 7,
    lessonChapterOrder: 2,
    lessonName: 'Lesson 3b',
    lessonContent: 'test',
    lessonRead: false,
    lessonActive: true,
    chapterID: 2,
    chapterOrder: 3,
    chapterName: 'Lists and Dictionaries',
    chapterRead: false
  },
  {
    lessonID: 4,
    lessonLessonOrder: 6,
    lessonChapterOrder: 1,
    lessonName: 'Lesson 3a',
    lessonContent: 'test',
    lessonRead: false,
    lessonActive: true,
    chapterID: 2,
    chapterOrder: 3,
    chapterName: 'Lists and Dictionaries',
    chapterRead: false
  },
  {
    lessonID: 5,
    lessonLessonOrder: 5,
    lessonChapterOrder: 1,
    lessonName: 'Lesson 2a',
    lessonContent: 'test',
    lessonRead: false,
    lessonActive: true,
    chapterID: 3,
    chapterOrder: 2,
    chapterName: 'Conditional logic',
    chapterRead: false
  },
  {
    lessonID: 7,
    lessonLessonOrder: 4,
    lessonChapterOrder: 4,
    lessonName: 'Lesson 1d',
    lessonContent: 'test',
    lessonRead: false,
    lessonActive: false,
    chapterID: 1,
    chapterOrder: 1,
    chapterName: 'Functions and Loops',
    chapterRead: false
  }
];

var reduced = {
  1: {
    chapterID: 1,
    chapterName: 'Functions and Loops',
    chapterOrder: 1,
    chapterRead: false,
    lessons: [
      {
        lessonChapterOrder: 1,
        lessonContent: 'test',
        lessonID: 3,
        lessonLessonOrder: 1,
        lessonName: 'Lesson 1a',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 3,
        lessonContent: 'test',
        lessonID: 2,
        lessonLessonOrder: 3,
        lessonName: 'Lesson 1c',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 2,
        lessonContent: 'test',
        lessonID: 1,
        lessonLessonOrder: 2,
        lessonName: 'Lesson 1b',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 4,
        lessonContent: 'test',
        lessonID: 7,
        lessonLessonOrder: 4,
        lessonName: 'Lesson 1d',
        lessonRead: false,
        lessonActive: false
      }
    ]
  },
  2: {
    chapterID: 2,
    chapterName: 'Lists and Dictionaries',
    chapterOrder: 3,
    chapterRead: false,
    lessons: [
      {
        lessonChapterOrder: 2,
        lessonContent: 'test',
        lessonID: 6,
        lessonLessonOrder: 7,
        lessonName: 'Lesson 3b',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 1,
        lessonContent: 'test',
        lessonID: 4,
        lessonLessonOrder: 6,
        lessonName: 'Lesson 3a',
        lessonRead: false,
        lessonActive: true
      }
    ]
  },
  3: {
    chapterID: 3,
    chapterName: 'Conditional logic',
    chapterOrder: 2,
    chapterRead: false,
    lessons: [
      {
        lessonChapterOrder: 1,
        lessonContent: 'test',
        lessonID: 5,
        lessonLessonOrder: 5,
        lessonName: 'Lesson 2a',
        lessonRead: false,
        lessonActive: true
      }
    ]
  }
};

var converted = [
  {
    chapterID: 1,
    chapterName: 'Functions and Loops',
    chapterOrder: 1,
    chapterRead: false,
    lessons: [
      {
        lessonChapterOrder: 1,
        lessonContent: 'test',
        lessonID: 3,
        lessonLessonOrder: 1,
        lessonName: 'Lesson 1a',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 3,
        lessonContent: 'test',
        lessonID: 2,
        lessonLessonOrder: 3,
        lessonName: 'Lesson 1c',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 2,
        lessonContent: 'test',
        lessonID: 1,
        lessonLessonOrder: 2,
        lessonName: 'Lesson 1b',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 4,
        lessonContent: 'test',
        lessonID: 7,
        lessonLessonOrder: 4,
        lessonName: 'Lesson 1d',
        lessonRead: false,
        lessonActive: false
      }
    ]
  },
  {
    chapterID: 2,
    chapterName: 'Lists and Dictionaries',
    chapterOrder: 3,
    chapterRead: false,
    lessons: [
      {
        lessonChapterOrder: 2,
        lessonContent: 'test',
        lessonID: 6,
        lessonLessonOrder: 7,
        lessonName: 'Lesson 3b',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 1,
        lessonContent: 'test',
        lessonID: 4,
        lessonLessonOrder: 6,
        lessonName: 'Lesson 3a',
        lessonRead: false,
        lessonActive: true
      }
    ]
  },
  {
    chapterID: 3,
    chapterName: 'Conditional logic',
    chapterOrder: 2,
    chapterRead: false,
    lessons: [
      {
        lessonChapterOrder: 1,
        lessonContent: 'test',
        lessonID: 5,
        lessonLessonOrder: 5,
        lessonName: 'Lesson 2a',
        lessonRead: false,
        lessonActive: true
      }
    ]
  }
];

var sorted = [
  {
    chapterID: 1,
    chapterName: 'Functions and Loops',
    chapterOrder: 1,
    chapterRead: false,
    lessons: [
      {
        lessonChapterOrder: 1,
        lessonContent: 'test',
        lessonID: 3,
        lessonLessonOrder: 1,
        lessonName: 'Lesson 1a',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 2,
        lessonContent: 'test',
        lessonID: 1,
        lessonLessonOrder: 2,
        lessonName: 'Lesson 1b',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 3,
        lessonContent: 'test',
        lessonID: 2,
        lessonLessonOrder: 3,
        lessonName: 'Lesson 1c',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 4,
        lessonContent: 'test',
        lessonID: 7,
        lessonLessonOrder: 4,
        lessonName: 'Lesson 1d',
        lessonRead: false,
        lessonActive: false
      }
    ]
  },
  {
    chapterID: 3,
    chapterName: 'Conditional logic',
    chapterOrder: 2,
    chapterRead: false,
    lessons: [
      {
        lessonChapterOrder: 1,
        lessonContent: 'test',
        lessonID: 5,
        lessonLessonOrder: 5,
        lessonName: 'Lesson 2a',
        lessonRead: false,
        lessonActive: true
      }
    ]
  },
  {
    chapterID: 2,
    chapterName: 'Lists and Dictionaries',
    chapterOrder: 3,
    chapterRead: false,
    lessons: [
      {
        lessonChapterOrder: 1,
        lessonContent: 'test',
        lessonID: 4,
        lessonLessonOrder: 6,
        lessonName: 'Lesson 3a',
        lessonRead: false,
        lessonActive: true
      },
      {
        lessonChapterOrder: 2,
        lessonContent: 'test',
        lessonID: 6,
        lessonLessonOrder: 7,
        lessonName: 'Lesson 3b',
        lessonRead: false,
        lessonActive: true
      }
    ]
  }
];

var chapters = [
  {
    id: 1,
    order_number: 1,
    name: 'Functions and Loops',
    read: false,
    created_at: '2016-07-08T23:49:03.267Z'
  },
  {
    id: 3,
    order_number: 2,
    name: 'Conditional logic',
    read: false,
    created_at: '2016-07-08T23:49:03.268Z'
  },
  {
    id: 2,
    order_number: 3,
    name: 'Lists and Dictionaries',
    read: false,
    created_at: '2016-07-08T23:49:03.267Z '
  }
];

var messages = [
  {
    messageID: 2,
    messageContent: 'Awesome lesson!',
    messageParentID: null,
    messageLessonID: 1,
    messageCreatedAt: '2015-07-09T06:00:00.000Z',
    messageUpdatedAt: '2015-07-09T06:00:00.000Z',
    userID: 1,
    userGithubDisplayName: 'Michael Johnson',
    userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
    userCreatedAt: '2016-07-17T21:04:34.977Z'
  },
  {
    messageID: 1,
    messageContent: 'Sick!',
    messageParentID: null,
    messageLessonID: 1,
    messageCreatedAt: '2016-07-09T06:00:00.000Z',
    messageUpdatedAt: '2016-07-09T06:00:00.000Z',
    userID: 1,
    userGithubDisplayName: 'Michael Johnson',
    userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
    userCreatedAt: '2016-07-17T21:04:34.977Z'
  },
  {
    messageID: 4,
    messageContent: 'Just a reply',
    messageParentID: 2,
    messageLessonID: 1,
    messageCreatedAt: '2016-07-17T21:04:35.000Z',
    messageUpdatedAt: '2016-07-17T21:04:35.000Z',
    userID: 1,
    userGithubDisplayName: 'Michael Johnson',
    userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
    userCreatedAt: '2016-07-17T21:04:34.977Z'
  },
  {
    messageID: 5,
    messageContent: 'Just another reply',
    messageParentID: 2,
    messageLessonID: 1,
    messageCreatedAt: '2016-07-17T21:04:35.000Z',
    messageUpdatedAt: '2016-07-17T21:04:35.000Z',
    userID: 1,
    userGithubDisplayName: 'Michael Johnson',
    userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
    userCreatedAt: '2016-07-17T21:04:34.977Z'
  }
];

var parentMessages = [
  {
    messageID: 2,
    messageContent: 'Awesome lesson!',
    messageParentID: null,
    messageLessonID: 1,
    messageCreatedAt: '2015-07-09T06:00:00.000Z',
    messageUpdatedAt: '2015-07-09T06:00:00.000Z',
    userID: 1,
    userGithubDisplayName: 'Michael Johnson',
    userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
    userCreatedAt: '2016-07-17T21:04:34.977Z'
  },
  {
    messageID: 1,
    messageContent: 'Sick!',
    messageParentID: null,
    messageLessonID: 1,
    messageCreatedAt: '2016-07-09T06:00:00.000Z',
    messageUpdatedAt: '2016-07-09T06:00:00.000Z',
    userID: 1,
    userGithubDisplayName: 'Michael Johnson',
    userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
    userCreatedAt: '2016-07-17T21:04:34.977Z'
  }
];

var childMessages = [
  {
    messageID: 2,
    messageContent: 'Awesome lesson!',
    messageParentID: null,
    messageLessonID: 1,
    messageCreatedAt: '2015-07-09T06:00:00.000Z',
    messageUpdatedAt: '2015-07-09T06:00:00.000Z',
    replies: [
      {
        messageContent: 'Just a reply',
        messageCreatedAt: '2016-07-17T21:04:35.000Z',
        messageUpdatedAt: '2016-07-17T21:04:35.000Z',
        messageID: 4,
        messageLessonID: 1,
        messageParentID: 2,
        userCreatedAt: '2016-07-17T21:04:34.977Z',
        userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
        userGithubDisplayName: 'Michael Johnson',
        userID: 1
      },
      {
        messageContent: 'Just another reply',
        messageCreatedAt: '2016-07-17T21:04:35.000Z',
        messageUpdatedAt: '2016-07-17T21:04:35.000Z',
        messageID: 5,
        messageLessonID: 1,
        messageParentID: 2,
        userCreatedAt: '2016-07-17T21:04:34.977Z',
        userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
        userGithubDisplayName: 'Michael Johnson',
        userID: 1
      }
    ],
    userID: 1,
    userGithubDisplayName: 'Michael Johnson',
    userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
    userCreatedAt: '2016-07-17T21:04:34.977Z'
  },
  {
    messageID: 1,
    messageContent: 'Sick!',
    messageParentID: null,
    messageLessonID: 1,
    messageCreatedAt: '2016-07-09T06:00:00.000Z',
    messageUpdatedAt: '2016-07-09T06:00:00.000Z',
    replies: [],
    userID: 1,
    userGithubDisplayName: 'Michael Johnson',
    userGithubAvatar: 'https://avatars.io/static/default_128.jpg',
    userCreatedAt: '2016-07-17T21:04:34.977Z'
  }
];

var lessonOrders = [
  {lesson_order_number: 1},
  {lesson_order_number: 2},
  {lesson_order_number: 3},
  {lesson_order_number: 4},
  {lesson_order_number: 5},
  {lesson_order_number: 6},
  {lesson_order_number: 7},
  {lesson_order_number:  8}
];

var lessonChapterOrders = [
  {chapter_order_number: 1},
  {chapter_order_number: 2},
  {chapter_order_number: 3},
  {chapter_order_number: 4},
  {chapter_order_number: 5},
  {chapter_order_number: 6}
];

module.exports = {
  base: base,
  reduced: reduced,
  converted: converted,
  sorted: sorted,
  chapters: chapters,
  messages: messages,
  parentMessages: parentMessages,
  childMessages: childMessages,
  lessonOrders: lessonOrders,
  lessonChapterOrders: lessonChapterOrders
};
