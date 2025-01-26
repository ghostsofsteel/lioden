chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        enabled: false,                   
        npcEffectivenessEnabled: true,   
        genderNeutralEnabled: false,      
        breedOnlyEnabled: true            
    });
});

let breedOnlyEnabled = true; 

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.breedOnlyToggle !== undefined) {
        breedOnlyEnabled = message.breedOnlyToggle;
        chrome.storage.sync.set({ breedOnlyEnabled: breedOnlyEnabled });
    }
    if (message.requestBreedOnlyState) {
        sendResponse({ breedOnlyEnabled });
    }
});

let huntTimer = null;
let patrolTimer = null;
let beetleTimer = null;
let treasureTimer = null;
let flirtTimer = null;
let huntTargetTime = null;
let patrolTargetTime = null;
let beetleTargetTime = null;
let treasureTargetTime = null;
let flirtTargetTime = null;
let huntNotificationSent = false;
let patrolNotificationSent = false;
let beetleNotificationSent = false;
let treasureNotificationSent = false;
let flirtNotificationSent = false;
let huntNotificationId = null;
let patrolNotificationId = null;
let beetleNotificationId = null;
let treasureNotificationId = null;
let flirtNotificationId = null;

function areNotificationsEnabled(callback) {
  chrome.storage.sync.get(['notificationsEnabled'], (data) => {
    callback(data.notificationsEnabled || false);
  });
}

function areBeetleNotificationsEnabled(callback) {
  chrome.storage.sync.get(['beetleNotificationsEnabled'], (data) => {
    callback(data.beetleNotificationsEnabled || false);
  });
}

function areTreasureNotificationsEnabled(callback) {
  chrome.storage.sync.get(['treasureNotificationsEnabled'], (data) => {
    callback(data.treasureNotificationsEnabled || false);
  });
}

function areFlirtNotificationsEnabled(callback) {
  chrome.storage.sync.get(['flirtNotificationsEnabled'], (data) => {
    callback(data.flirtNotificationsEnabled || false);
  });
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'startHunt') {
    startHunt();
  } else if (message.action === 'startPatrol') {
    startPatrol();
  } else if (message.action === 'startBeetle') {
    startBeetle();
  } else if (message.action === 'startTreasure') {
    startTreasure();
  } else if (message.action === 'startFlirt') {
    startFlirt();
  }
});

function startBeetle() {
  beetleNotificationSent = false; 

  const currentTime = Date.now();
 beetleTargetTime = currentTime + (15 * 60 * 1000); 

  chrome.storage.sync.set({ beetleEndTime: beetleTargetTime }, () => {
    startBeetleTimer();
  });
  
  if (beetleNotificationId) {
    chrome.notifications.clear(beetleNotificationId);
  }
}
function startBeetleTimer() {
  beetleTimer = setInterval(() => {
    chrome.storage.sync.get('beetleEndTime', (data) => {
      if (data.beetleEndTime) {
        const remainingTime = data.beetleEndTime - Date.now();
        
        if (remainingTime <= 0) {
          clearInterval(beetleTimer);
          beetleTimer = null; 
          if (!beetleNotificationSent) {
            areBeetleNotificationsEnabled((enabled) => {
              if (enabled) {
                showBeetleNotification();
                beetleNotificationSent = true;
              }
            });
          }
        } else {
          updatePopup('beetle', remainingTime);
        }
      }
    });
  }, 1000);
}

function startTreasure() {
  treasureNotificationSent = false; 

  const currentTime = Date.now();
 treasureTargetTime = currentTime + (15 * 60 * 1000); 

  chrome.storage.sync.set({ treasureEndTime: treasureTargetTime }, () => {
    startTreasureTimer();
  });
  
  if (treasureNotificationId) {
    chrome.notifications.clear(treasureNotificationId);
  }
}
function startTreasureTimer() {
  treasureTimer = setInterval(() => {
    chrome.storage.sync.get('treasureEndTime', (data) => {
      if (data.treasureEndTime) {
        const remainingTime = data.treasureEndTime - Date.now();
        
        if (remainingTime <= 0) {
          clearInterval(treasureTimer);
          treasureTimer = null; 
          if (!treasureNotificationSent) {
            areTreasureNotificationsEnabled((enabled) => {
              if (enabled) {
                showTreasureNotification();
                treasureNotificationSent = true;
              }
            });
          }
        } else {
          updatePopup('treasure', remainingTime);
        }
      }
    });
  }, 1000);
}

function startFlirt() {
  flirtNotificationSent = false; 

  const currentTime = Date.now();
 flirtTargetTime = currentTime + (15 * 60 * 1000); 

  chrome.storage.sync.set({ flirtEndTime: flirtTargetTime }, () => {
    startFlirtTimer();
  });
  
  if (flirtNotificationId) {
    chrome.notifications.clear(flirtNotificationId);
  }
}
function startFlirtTimer() {
  treasureTimer = setInterval(() => {
    chrome.storage.sync.get('flirtEndTime', (data) => {
      if (data.flirtEndTime) {
        const remainingTime = data.flirstEndTime - Date.now();
        
        if (remainingTime <= 0) {
          clearInterval(flirtTimer);
          flirtTimer = null; 
          if (!flirtNotificationSent) {
            areFlirtNotificationsEnabled((enabled) => {
              if (enabled) {
                showFlirtNotification();
                flirtNotificationSent = true;
              }
            });
          }
        } else {
          updatePopup('flirt', remainingTime);
        }
      }
    });
  }, 1000);
}

function startHunt() {
  huntNotificationSent = false; 

  const currentTime = Date.now();
  huntTargetTime = currentTime + (30 * 60 * 1000); 

  chrome.storage.sync.set({ huntEndTime: huntTargetTime }, () => {
    startHuntTimer();
  });

  
  if (huntNotificationId) {
    chrome.notifications.clear(huntNotificationId);
  }
}

function startPatrol() {
  patrolNotificationSent = false; 

  const currentTime = Date.now();
  patrolTargetTime = currentTime + (60 * 60 * 1000); 

  chrome.storage.sync.set({ patrolEndTime: patrolTargetTime }, () => {
    startPatrolTimer();
  });


  if (patrolNotificationId) {
    chrome.notifications.clear(patrolNotificationId);
  }
}

function startHuntTimer() {
  huntTimer = setInterval(() => {
    chrome.storage.sync.get('huntEndTime', (data) => {
      if (data.huntEndTime) {
        const remainingTime = data.huntEndTime - Date.now();
        
        if (remainingTime <= 0) {
          clearInterval(huntTimer);
          huntTimer = null; 
          if (!huntNotificationSent) {
            areNotificationsEnabled((enabled) => {
              if (enabled) {
                showHuntNotification();
                huntNotificationSent = true;
              }
            });
          }
        } else {
          updatePopup('hunt', remainingTime);
        }
      }
    });
  }, 1000);
}

function startPatrolTimer() {
  patrolTimer = setInterval(() => {
    chrome.storage.sync.get('patrolEndTime', (data) => {
      if (data.patrolEndTime) {
        const remainingTime = data.patrolEndTime - Date.now();
        
        if (remainingTime <= 0) {
          clearInterval(patrolTimer);
          patrolTimer = null;
          if (!patrolNotificationSent) {
            areNotificationsEnabled((enabled) => {
              if (enabled) {
                showPatrolNotification();
                patrolNotificationSent = true;
              }
            });
          }
        } else {
          updatePopup('patrol', remainingTime);
        }
      }
    });
  }, 1000);
}

function updatePopup(timerType, remainingTime) {
  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);
  
  chrome.runtime.sendMessage({ action: 'updateTime', timerType, minutes, seconds });
}

function showHuntNotification() {
  chrome.notifications.create('huntNotification', {
    type: 'basic',
    iconUrl: 'images/icon128.png', 
    title: 'Hunt Complete',
    message: 'Your Lionesses Have Returned From Hunting!',
    priority: 2,
    requireInteraction: true
  }, (createdNotificationId) => {
    huntNotificationId = createdNotificationId;
  });
}

function showPatrolNotification() {
  chrome.notifications.create('patrolNotification', {
    type: 'basic',
    iconUrl: 'images/icon128.png', 
    title: 'Patrol Complete',
    message: 'Your Submale Has Completed His Patrol!',
    priority: 2,
    requireInteraction: true
  }, (createdNotificationId) => {
    patrolNotificationId = createdNotificationId;
  });
}
function showBeetleNotification() {
  chrome.notifications.create('beetleNotification', {
    type: 'basic',
    iconUrl: 'images/icon128.png', 
    title: 'Beetle Battling!',
    message: 'Your Beetles Are Ready To Battle Again!',
    priority: 2,
    requireInteraction: true
  }, (createdNotificationId) => {
    beetleNotificationId = createdNotificationId;
  });
}
function showTreasureNotification() {
  chrome.notifications.create('treasureNotification', {
    type: 'basic',
    iconUrl: 'images/icon128.png', 
    title: 'Treasure Hunting!',
    message: 'Your Submale Is Back From Treasure Hunting!',
    priority: 2,
    requireInteraction: true
  }, (createdNotificationId) => {
    treasureNotificationId = createdNotificationId;
  });
}
function showFlirtNotification() {
  chrome.notifications.create('flirtNotification', {
    type: 'basic',
    iconUrl: 'images/icon128.png', 
    title: 'Flirting!',
    message: 'You Can Flirt Again!',
    priority: 2,
    requireInteraction: true
  }, (createdNotificationId) => {
    flirtNotificationId = createdNotificationId;
  });
}
chrome.notifications.onClicked.addListener((clickedNotificationId) => {
  if (clickedNotificationId === huntNotificationId) {
    chrome.storage.sync.set({ huntEndTime: null });
    huntNotificationSent = false;
  } else if (clickedNotificationId === patrolNotificationId) {
    chrome.storage.sync.set({ patrolEndTime: null });
    patrolNotificationSent = false;
  } else if (clickedNotificationId === beetleNotificationId) {
    chrome.storage.sync.set({ beetleEndTime: null });
    beetleNotificationSent = false;
  } else if (clickedNotificationId === treasureNotificationId) {
    chrome.storage.sync.set({ treasureEndTime: null });
    treasureNotificationSent = false;
  } else if (clickedNotificationId === flirtNotificationId) {
    chrome.storage.sync.set({ flirtEndTime: null });
    treasureNotificationSent = false;
  }
});
