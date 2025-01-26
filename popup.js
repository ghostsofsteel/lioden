document.addEventListener('DOMContentLoaded', () => {
    const toggleScript = document.getElementById('toggleScript');
    const toggleNpcEffectiveness = document.getElementById('toggleNpcEffectiveness');
    const toggleGenderNeutral = document.getElementById('toggleGenderNeutral');
	const cosmeticUrlInputPrimary = document.getElementById("cosmeticUrlInputPrimary");
	const cosmeticUrlInputSecondary = document.getElementById("cosmeticUrlInputSecondary");
    const imageSelect = document.getElementById('imageSelect');
    const baseImageSelect = document.getElementById('baseImageSelect');
	const imageSelect2 = document.getElementById('imageSelect2');
	const baseImageSelect2 = document.getElementById('baseImageSelect2');
    const toggleEyeZIndex = document.getElementById('toggleEyeZIndex');
	const toggleFestiveFrame = document.getElementById('toggleFestiveFrame');
	const breedOnlyToggle = document.getElementById('breedOnlyToggle');


chrome.storage.sync.get(['breedOnlyEnabled'], (data) => {
    breedOnlyToggle.checked = data.breedOnlyEnabled || false;
});


breedOnlyToggle.addEventListener('change', () => {
    const isEnabled = breedOnlyToggle.checked;
    chrome.storage.sync.set({ breedOnlyEnabled: isEnabled });
    chrome.runtime.sendMessage({ breedOnlyToggle: isEnabled });
});

    chrome.storage.sync.get(['cosmeticUrlPrimary', 'cosmeticUrlSecondary', 'enabled', 'npcEffectivenessEnabled', 'genderNeutralEnabled', 'selectedImage', 'selectedBaseImage', 'selectedImage2', 'selectedBaseImage2', 'eyeZIndexEnabled', 'festiveFrameEnabled'], (data) => {
        toggleScript.checked = data.enabled || false;
        toggleNpcEffectiveness.checked = data.npcEffectivenessEnabled || false;
        toggleGenderNeutral.checked = data.genderNeutralEnabled || false;
		cosmeticUrlInputPrimary.value = data.cosmeticUrlPrimary || "";
		cosmeticUrlInputSecondary.value = data.cosmeticUrlSecondary || "";
        imageSelect.value = data.selectedImage || '';
        baseImageSelect.value = data.selectedBaseImage || '';
		imageSelect2.value = data.selectedImage2 || '';
        baseImageSelect2.value = data.selectedBaseImage2 || '';
        toggleEyeZIndex.checked = data.eyeZIndexEnabled || false;
		toggleFestiveFrame.checked = data.festiveFrameEnabled || false;
    });

    toggleScript.addEventListener('change', () => {
        chrome.storage.sync.set({ enabled: toggleScript.checked });
    });

    toggleNpcEffectiveness.addEventListener('change', () => {
        chrome.storage.sync.set({ npcEffectivenessEnabled: toggleNpcEffectiveness.checked });
    });

    toggleGenderNeutral.addEventListener('change', () => {
        chrome.storage.sync.set({ genderNeutralEnabled: toggleGenderNeutral.checked });
    });

  cosmeticUrlInputPrimary.addEventListener("input", () => {
    chrome.storage.sync.set({ cosmeticUrlPrimary: cosmeticUrlInputPrimary.value });
  });

  cosmeticUrlInputSecondary.addEventListener("input", () => {
    chrome.storage.sync.set({ cosmeticUrlSecondary: cosmeticUrlInputSecondary.value });
  });
    imageSelect.addEventListener('change', () => {
        const selectedImage = imageSelect.value;
        chrome.storage.sync.set({ selectedImage: selectedImage });
    });

    baseImageSelect.addEventListener('change', () => {
        const selectedBaseImage = baseImageSelect.value;
        chrome.storage.sync.set({ selectedBaseImage: selectedBaseImage });
    });

  imageSelect2.addEventListener("change", () => {
    chrome.storage.sync.set({ selectedImage2: imageSelect2.value });
  });
  baseImageSelect2.addEventListener("change", () => {
    chrome.storage.sync.set({ selectedBaseImage2: baseImageSelect2.value });
  });

    toggleEyeZIndex.addEventListener('change', () => {
        chrome.storage.sync.set({ eyeZIndexEnabled: toggleEyeZIndex.checked });
    });
toggleFestiveFrame.addEventListener('change', () => {
    chrome.storage.sync.set({ festiveFrameEnabled: toggleFestiveFrame.checked });
});

});
document.getElementById("good-lioness").addEventListener("input", function() {
    const goodText = this.value;
    chrome.storage.local.set({ goodLionessText: goodText });
});

document.getElementById("kind-lioness").addEventListener("input", function() {
    const kindText = this.value;
    chrome.storage.local.set({ kindLionessText: kindText });
});

document.getElementById("neutral-lioness").addEventListener("input", function() {
    const neutralText = this.value;
    chrome.storage.local.set({ neutralLionessText: neutralText });
});

document.getElementById("snarky-lioness").addEventListener("input", function() {
    const snarkyText = this.value;
    chrome.storage.local.set({ snarkyLionessText: snarkyText });
});

document.getElementById("evil-lioness").addEventListener("input", function() {
    const evilText = this.value;
    chrome.storage.local.set({ evilLionessText: evilText });
});

window.onload = function() {
    chrome.storage.local.get(["goodLionessText", "kindLionessText", "neutralLionessText", "snarkyLionessText", "evilLionessText"], function(result) {
        document.getElementById("good-lioness").value = result.goodLionessText || '';
        document.getElementById("kind-lioness").value = result.kindLionessText || '';
        document.getElementById("neutral-lioness").value = result.neutralLionessText || '';
        document.getElementById("snarky-lioness").value = result.snarkyLionessText || '';
        document.getElementById("evil-lioness").value = result.evilLionessText || '';
    });
};

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'updateTime') {
    const { timerType, minutes, seconds } = message;
    const timerElement = document.getElementById(`${timerType}Timer`);

    if (timerElement) {
      timerElement.textContent = `${minutes}m ${seconds}s`;
    }
  }
});


document.getElementById('enableNotifications').addEventListener('change', (event) => {
  chrome.storage.sync.set({ notificationsEnabled: event.target.checked });
});

chrome.storage.sync.get(['notificationsEnabled'], (data) => {
  document.getElementById('enableNotifications').checked = data.notificationsEnabled || false;
});

document.getElementById('enableBeetleNotifications').addEventListener('change', (event) => {
  chrome.storage.sync.set({ beetleNotificationsEnabled: event.target.checked });
});

chrome.storage.sync.get(['beetleNotificationsEnabled'], (data) => {
  document.getElementById('enableBeetleNotifications').checked = data.beetleNotificationsEnabled || false;
});

document.getElementById('enableTreasureNotifications').addEventListener('change', (event) => {
  chrome.storage.sync.set({ treasureNotificationsEnabled: event.target.checked });
});

chrome.storage.sync.get(['treasureNotificationsEnabled'], (data) => {
  document.getElementById('enableTreasureNotifications').checked = data.treasureNotificationsEnabled || false;
});

document.getElementById('enableFlirtNotifications').addEventListener('change', (event) => {
  chrome.storage.sync.set({ flirtNotificationsEnabled: event.target.checked });
});

chrome.storage.sync.get(['flirtNotificationsEnabled'], (data) => {
  document.getElementById('enableFlirtNotifications').checked = data.flirtNotificationsEnabled || false;
});

chrome.storage.sync.get('fontSize', (data) => {
    const fontSizeValue = data.fontSize || '13'; 
    document.getElementById('fontSize').value = fontSizeValue; 
});

document.getElementById('fontSize').addEventListener('input', () => {
    const fontSizeValue = document.getElementById('fontSize').value;

    chrome.storage.sync.set({ fontSize: fontSizeValue }, () => {
        console.log('Font size updated:', fontSizeValue);
    });
});
