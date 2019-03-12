// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  openInMaps(info.selectionText);
}

function openInMaps(keyword) {
  var url = "https://www.google.com/maps/search/" + keyword
  window.open(url,'_blank');

}

// Create one test item for each context type.
var contexts = ["selection","link"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Open in maps (new tab)";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});
}