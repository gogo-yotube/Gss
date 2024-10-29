const stories = {
  educational: [
    {
      title: "قصة الأعداد",
      content: "في يوم من الأيام، كانت هناك قطة صغيرة تحب الأرقام. كلما وجدت شيئًا، كانت تعده بصوت عالٍ. وبهذه الطريقة، تعلمت الأعداد من 1 إلى 10."
    },
    {
      title: "قصص الحروف",
      content: "في غابة مليئة بالأشجار، كانت هناك حروف تسكن معًا. كل حرف كان له صوت خاص به. علمتهم معلمة الحروف كيفية التحدث مع بعضهم."
    }
  ],
  normal: [
    {
      title: "الأرنب والسلحفاة",
      content: "كان هناك أرنب سريع وسلحفاة بطيئة. قرر الأرنب التحدي مع السلحفاة في سباق. ولكن بسبب غروره، نام الأرنب أثناء السباق، وفازت السلحفاة."
    },
    {
      title: "حكاية الغزال",
      content: "كان هناك غزال جميل يعيش في الغابة. كان يحب القفز والركض، وفي أحد الأيام، قرر الذهاب في مغامرة لاستكشاف الغابة."
    }
  ],
  space: [
    {
      title: "مغامرات في الفضاء",
      content: "في كوكب بعيد، كانت هناك مخلوقات فضائية صغيرة تبحث عن أصدقاء. انطلقوا في رحلة عبر الفضاء للبحث عن أصدقاء جدد."
    },
    {
      title: "قمر الفضاء",
      content: "كان هناك قمر يضيء السماء. أحب الأطفال أن ينظروا إليه كل ليلة، حيث كان يروي لهم القصص عن النجوم والكواكب."
    }
  ]
};

function showStories(category) {
  const storyContainer = document.getElementById("storyContainer");
  storyContainer.innerHTML = ""; // تفريغ المحتوى السابق

  const categoryStories = stories[category];

  categoryStories.forEach(story => {
    const storyElement = document.createElement("div");
    storyElement.className = "story";
    storyElement.innerHTML = `<h3>${story.title}</h3><p>${story.content}</p>`;
    storyContainer.appendChild(storyElement);
  });
}
