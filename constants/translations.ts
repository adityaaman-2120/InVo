export type Language = 'English' | 'Hindi' | 'Bengali';

type TranslationMap = {
  [key: string]: { English: string; Hindi: string; Bengali: string };
};

const shared: TranslationMap = {
  // General
  cancel: { English: 'Cancel', Hindi: 'रद्द करें', Bengali: 'বাতিল করুন' },
  save: { English: 'Save', Hindi: 'सहेजें', Bengali: 'সংরক্ষণ করুন' },
  delete: { English: 'Delete', Hindi: 'हटाएं', Bengali: 'মুছুন' },
  done: { English: 'Done', Hindi: 'हो गया', Bengali: 'শেষ' },
  back: { English: 'Back', Hindi: 'वापस', Bengali: 'পিছনে' },
  error: { English: 'Error', Hindi: 'त्रुटि', Bengali: 'ত্রুটি' },
  success: { English: 'Success', Hindi: 'सफलता', Bengali: 'সাফল্য' },
  validation: { English: 'Validation', Hindi: 'सत्यापन', Bengali: 'যাচাইকরণ' },
  optional: { English: '(optional)', Hindi: '(वैकल्पिक)', Bengali: '(ঐচ্ছিক)' },
  noImage: { English: 'No image', Hindi: 'कोई छवि नहीं', Bengali: 'কোনো ছবি নেই' },
  selectDate: { English: 'Select Date', Hindi: 'तारीख चुनें', Bengali: 'তারিখ নির্বাচন করুন' },
  loading: { English: 'Loading...', Hindi: 'लोड हो रहा है...', Bengali: 'লোড হচ্ছে...' },
  permissionRequired: { English: 'Permission Required', Hindi: 'अनुमति आवश्यक', Bengali: 'অনুমতি প্রয়োজন' },
};

const dashboard: TranslationMap = {
  dashboard: { English: 'Dashboard', Hindi: 'डैशबोर्ड', Bengali: 'ড্যাশবোর্ড' },
  inventoryAlerts: { English: 'Inventory Alerts', Hindi: 'इन्वेंट्री अलर्ट', Bengali: 'ইনভেন্টরি সতর্কতা' },
  todaySalesRevenue: { English: "Today's Sales Revenue", Hindi: 'आज की बिक्री राजस्व', Bengali: 'আজকের বিক্রয় আয়' },
  recentActivities: { English: 'Recent Activities', Hindi: 'हाल की गतिविधियाँ', Bengali: 'সাম্প্রতিক কার্যক্রম' },
  itemsValue: { English: 'Items Value', Hindi: 'वस्तुओं का मूल्य', Bengali: 'পণ্যের মূল্য' },
  itemsSold: { English: 'Items Sold', Hindi: 'बेची गई वस्तुएं', Bengali: 'বিক্রিত পণ্য' },
  totalProducts: { English: 'Total Products', Hindi: 'कुल उत्पाद', Bengali: 'মোট পণ্য' },
  noActivities: { English: 'No activities yet', Hindi: 'अभी तक कोई गतिविधि नहीं', Bengali: 'এখনো কোনো কার্যক্রম নেই' },
  loadingActivities: { English: 'Loading activities...', Hindi: 'गतिविधियां लोड हो रही हैं...', Bengali: 'কার্যক্রম লোড হচ্ছে...' },
  allInStock: { English: 'All items in stock!', Hindi: 'सभी वस्तुएं स्टॉक में हैं!', Bengali: 'সব পণ্য স্টকে আছে!' },
  fullyStocked: { English: 'Your inventory is fully stocked.', Hindi: 'आपकी इन्वेंट्री पूरी तरह से भरी हुई है।', Bengali: 'আপনার ইনভেন্টরি সম্পূর্ণ মজুত রয়েছে।' },
  expired: { English: 'EXPIRED', Hindi: 'समाप्त', Bengali: 'মেয়াদোত্তীর্ণ' },
  out: { English: 'OUT', Hindi: 'खत्म', Bengali: 'শেষ' },
  low: { English: 'LOW', Hindi: 'कम', Bengali: 'কম' },
  ignore: { English: 'IGNORE', Hindi: 'अनदेखा करें', Bengali: 'উপেক্ষা করুন' },
  remove: { English: 'REMOVE', Hindi: 'हटाएं', Bengali: 'সরান' },
  added: { English: 'Added', Hindi: 'जोड़ा गया', Bengali: 'যোগ করা হয়েছে' },
  updated: { English: 'Updated', Hindi: 'अपडेट किया गया', Bengali: 'আপডেট করা হয়েছে' },
  sold: { English: 'Sold', Hindi: 'बेचा गया', Bengali: 'বিক্রিত' },
  transaction: { English: 'Transaction', Hindi: 'लेन-देन', Bengali: 'লেনদেন' },
  justNow: { English: 'Just now', Hindi: 'अभी अभी', Bengali: 'এইমাত্র' },
  yesterday: { English: 'Yesterday', Hindi: 'कल', Bengali: 'গতকাল' },
  hoursAgo: { English: 'h ago', Hindi: 'घंटे पहले', Bengali: 'ঘন্টা আগে' },
};

const products: TranslationMap = {
  products: { English: 'Products', Hindi: 'उत्पाद', Bengali: 'পণ্য' },
  addProduct: { English: 'Add Product', Hindi: 'उत्पाद जोड़ें', Bengali: 'পণ্য যোগ করুন' },
  noProductsYet: { English: 'No Products Yet', Hindi: 'अभी तक कोई उत्पाद नहीं', Bengali: 'এখনো কোনো পণ্য নেই' },
  startByAdding: { English: "Start by adding your first product", Hindi: 'अपना पहला उत्पाद जोड़कर शुरू करें', Bengali: 'আপনার প্রথম পণ্য যোগ করে শুরু করুন' },
  stockInHand: { English: 'Stock in Hand', Hindi: 'हाथ में स्टॉक', Bengali: 'হাতে মজুত' },
  productsList: { English: 'Products list', Hindi: 'उत्पाद सूची', Bengali: 'পণ্যের তালিকা' },
  productName: { English: 'Product Name', Hindi: 'उत्पाद का नाम', Bengali: 'পণ্যের নাম' },
  buyingPrice: { English: 'Buying Price (₹)', Hindi: 'खरीद मूल्य (₹)', Bengali: 'ক্রয় মূল্য (₹)' },
  sellingPrice: { English: 'Selling Price (₹)', Hindi: 'बिक्री मूल्य (₹)', Bengali: 'বিক্রয় মূল্য (₹)' },
  quantity: { English: 'Quantity', Hindi: 'मात्रा', Bengali: 'পরিমাণ' },
  expiryDate: { English: 'Expiry Date', Hindi: 'समाप्ति तिथि', Bengali: 'মেয়াদ শেষের তারিখ' },
  unit: { English: 'Unit', Hindi: 'इकाई', Bengali: 'একক' },
  productImage: { English: 'Product Image', Hindi: 'उत्पाद छवि', Bengali: 'পণ্যের ছবি' },
  searchProducts: { English: 'Search products...', Hindi: 'उत्पाद खोजें...', Bengali: 'পণ্য অনুসন্ধান...' },
  egApples: { English: 'e.g., Apples', Hindi: 'जैसे, सेब', Bengali: 'যেমন, আপেল' },
  tapToSelectImage: { English: 'Tap to select image', Hindi: 'छवि चुनने के लिए टैप करें', Bengali: 'ছবি নির্বাচন করতে ট্যাপ করুন' },
  pricePlaceholder: { English: '0.00', Hindi: '0.00', Bengali: '0.00' },
  qtyPlaceholder: { English: '0', Hindi: '0', Bengali: '০' },
  datePlaceholder: { English: 'DD/MM/YYYY', Hindi: 'DD/MM/YYYY', Bengali: 'DD/MM/YYYY' },
  pc: { English: 'pc', Hindi: 'पीसी', Bengali: 'পিসি' },
  kg: { English: 'kg', Hindi: 'किग्रा', Bengali: 'কেজি' },
  g: { English: 'g', Hindi: 'ग्राम', Bengali: 'গ্রাম' },
  lt: { English: 'lt', Hindi: 'लीटर', Bengali: 'লিটার' },
  ml: { English: 'ml', Hindi: 'मिली', Bengali: 'মিলি' },
  box: { English: 'box', Hindi: 'बॉक्स', Bengali: 'বক্স' },
  pkt: { English: 'pkt', Hindi: 'पैकेट', Bengali: 'প্যাকেট' },
  resetDatabase: { English: 'Reset Database', Hindi: 'डेटाबेस रीसेट करें', Bengali: 'ডাটাবেস রিসেট করুন' },
  databaseError: { English: 'Database Error', Hindi: 'डेटाबेस त्रुटि', Bengali: 'ডাটাবেস ত্রুটি' },
  failLoadProducts: { English: 'Failed to load products:', Hindi: 'उत्पाद लोड करने में विफल:', Bengali: 'পণ্য লোড করতে ব্যর্থ:' },
  resetPrompt: { English: 'Would you like to reset the database?', Hindi: 'क्या आप डेटाबेस रीसेट करना चाहेंगे?', Bengali: 'আপনি কি ডাটাবেস রিসেট করতে চান?' },
  dbResetSuccess: { English: 'Database reset successfully!', Hindi: 'डेटाबेस सफलतापूर्वक रीसेट हुआ!', Bengali: 'ডাটাবেস সফলভাবে রিসেট হয়েছে!' },
  productAdded: { English: 'Product added successfully!', Hindi: 'उत्पाद सफलतापूर्वक जोड़ा गया!', Bengali: 'পণ্য সফলভাবে যোগ করা হয়েছে!' },
  enterProductName: { English: 'Please enter a product name.', Hindi: 'कृपया उत्पाद का नाम दर्ज करें।', Bengali: 'অনুগ্রহ করে পণ্যের নাম লিখুন।' },
  enterValidNumbers: { English: 'Please enter valid numbers for prices and quantity.', Hindi: 'कृपया मूल्य और मात्रा के लिए वैध संख्या दर्ज करें।', Bengali: 'অনুগ্রহ করে দাম এবং পরিমাণের জন্য বৈধ সংখ্যা লিখুন।' },
  positiveNumbers: { English: 'Prices and quantity must be positive numbers.', Hindi: 'मूल्य और मात्रा सकारात्मक संख्या होनी चाहिए।', Bengali: 'দাম এবং পরিমাণ ধনাত্মক সংখ্যা হতে হবে।' },
};

const explore: TranslationMap = {
  cart: { English: 'Cart', Hindi: 'कार्ट', Bengali: 'কার্ট' },
  payment: { English: 'Payment', Hindi: 'भुगतान', Bengali: 'পেমেন্ট' },
  paymentSuccessful: { English: 'Payment Successful!', Hindi: 'भुगतान सफल!', Bengali: 'পেমেন্ট সফল!' },
  total: { English: 'Total', Hindi: 'कुल', Bengali: 'মোট' },
  stockRemaining: { English: 'Stock: %s remaining', Hindi: 'स्टॉक: %s शेष', Bengali: 'স্টক: %s অবশিষ্ট' },
  each: { English: '₹%s each', Hindi: '₹%s प्रति', Bengali: '₹%s প্রতি' },
  scanQr: { English: 'Scan QR code to pay', Hindi: 'भुगतान करने के लिए QR कोड स्कैन करें', Bengali: 'পেমেন্ট করতে QR কোড স্ক্যান করুন' },
  yourCartEmpty: { English: 'Your cart is empty', Hindi: 'आपकी कार्ट खाली है', Bengali: 'আপনার কার্ট খালি' },
  proceed: { English: 'Proceed', Hindi: 'आगे बढ़ें', Bengali: 'এগিয়ে যান' },
  outOfStock: { English: 'Out of Stock', Hindi: 'स्टॉक खत्म', Bengali: 'স্টক শেষ' },
  outOfStockMsg: { English: '%s is currently out of stock.', Hindi: '%s वर्तमान में स्टॉक से बाहर है।', Bengali: '%s বর্তমানে স্টকের বাইরে।' },
  stockLimit: { English: 'Stock Limit Reached', Hindi: 'स्टॉक सीमा पहुंच गई', Bengali: 'স্টক সীমা পৌঁছেছে' },
  stockLimitMsg: { English: 'You can only add up to %s', Hindi: 'आप केवल %s तक जोड़ सकते हैं', Bengali: 'আপনি শুধু %s পর্যন্ত যোগ করতে পারেন' },
  inventoryError: { English: 'Inventory Error', Hindi: 'इन्वेंट्री त्रुटि', Bengali: 'ইনভেন্টরি ত্রুটি' },
  itemsUnavailable: { English: 'Some items are no longer available...', Hindi: 'कुछ वस्तुएं अब उपलब्ध नहीं हैं...', Bengali: 'কিছু পণ্য আর উপলব্ধ নেই...' },
  paymentDone: { English: 'Payment completed successfully!\n\nTotal: ₹%s\nItems sold: %s\n\nInventory has been updated.', Hindi: 'भुगतान सफलतापूर्वक पूरा हुआ!\n\nकुल: ₹%s\nबेची गई वस्तुएं: %s\n\nइन्वेंट्री अपडेट कर दी गई है।', Bengali: 'পেমেন্ট সফলভাবে সম্পন্ন!\n\nমোট: ₹%s\nবিক্রিত পণ্য: %s\n\nইনভেন্টরি আপডেট করা হয়েছে।' },
  paymentFailed: { English: 'Failed to process payment. Please try again.', Hindi: 'भुगतान संसाधित करने में विफल। कृपया पुनः प्रयास करें।', Bengali: 'পেমেন্ট প্রক্রিয়া করতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।' },
  noQrCode: { English: 'No QR Code', Hindi: 'कोई QR कोड नहीं', Bengali: 'কোনো QR কোড নেই' },
  addInSettings: { English: 'Add in Settings', Hindi: 'सेटिंग्स में जोड़ें', Bengali: 'সেটিংসে যোগ করুন' },
};

const settingsStr: TranslationMap = {
  settings: { English: 'Settings', Hindi: 'सेटिंग्स', Bengali: 'সেটিংস' },
  business: { English: 'Business', Hindi: 'व्यवसाय', Bengali: 'ব্যবসা' },
  appSettings: { English: 'App Settings', Hindi: 'ऐप सेटिंग्स', Bengali: 'অ্যাপ সেটিংস' },
  about: { English: 'About', Hindi: 'बारे में', Bengali: 'সম্পর্কে' },
  shopDetails: { English: 'Shop Details', Hindi: 'दुकान का विवरण', Bengali: 'দোকানের বিবরণ' },
  customers: { English: 'Customers', Hindi: 'ग्राहक', Bengali: 'গ্রাহক' },
  categories: { English: 'Categories', Hindi: 'श्रेणियाँ', Bengali: 'ক্যাটাগরি' },
  reportAnalytics: { English: 'Report & Analytics', Hindi: 'रिपोर्ट और विश्लेषण', Bengali: 'রিপোর্ট ও বিশ্লেষণ' },
  backupRestore: { English: 'Backup & Restoring', Hindi: 'बैकअप और पुनर्स्थापना', Bengali: 'ব্যাকআপ ও পুনরুদ্ধার' },
  exportData: { English: 'Export Data', Hindi: 'डेटा निर्यात', Bengali: 'ডেটা এক্সপোর্ট' },
  currency: { English: 'Currency', Hindi: 'मुद्रा', Bengali: 'মুদ্রা' },
  language: { English: 'Language', Hindi: 'भाषा', Bengali: 'ভাষা' },
  theme: { English: 'Theme', Hindi: 'थीम', Bengali: 'থিম' },
  notifications: { English: 'Notifications', Hindi: 'सूचनाएं', Bengali: 'বিজ্ঞপ্তি' },
  biometryLock: { English: 'Biometry Lock', Hindi: 'बायोमेट्री लॉक', Bengali: 'বায়োমেট্রি লক' },
  contactSupport: { English: 'Contact Support', Hindi: 'सहायता से संपर्क', Bengali: 'সহাযোগের জন্য যোগাযোগ' },
  termsConditions: { English: 'Terms & Conditions', Hindi: 'नियम और शर्तें', Bengali: 'শর্তাবলী' },
  privacyPolicy: { English: 'Privacy Policy', Hindi: 'गोपनीयता नीति', Bengali: 'গোপনীয়তা নীতি' },
  appVersion: { English: 'App Version', Hindi: 'ऐप संस्करण', Bengali: 'অ্যাপ সংস্করণ' },
  logOut: { English: 'Log Out', Hindi: 'लॉग आउट', Bengali: 'লগ আউট' },
  selectLanguage: { English: 'Select Language', Hindi: 'भाषा चुनें', Bengali: 'ভাষা নির্বাচন করুন' },
  chooseLanguage: { English: 'Choose your preferred language', Hindi: 'अपनी पसंदीदा भाषा चुनें', Bengali: 'আপনার পছন্দের ভাষা নির্বাচন করুন' },
  moreLanguages: { English: 'More languages coming soon', Hindi: 'और भाषाएं जल्द आ रही हैं', Bengali: 'আরও ভাষা শীঘ্রই আসছে' },
  logoutTitle: { English: 'Logout', Hindi: 'लॉग आउट', Bengali: 'লগ আউট' },
  logoutMsg: { English: 'Are you sure you want to logout? This will reset the app.', Hindi: 'क्या आप लॉग आउट करना चाहते हैं? यह ऐप रीसेट कर देगा।', Bengali: 'আপনি কি লগ আউট করতে চান? এটি অ্যাপ রিসেট করবে।' },
  currencyChanged: { English: 'Changed to %s', Hindi: '%s में बदल दिया गया', Bengali: '%s এ পরিবর্তিত হয়েছে' },
  dark: { English: 'Dark', Hindi: 'डार्क', Bengali: 'ডার্ক' },
};

const shopDetails: TranslationMap = {
  shopDetails: { English: 'Shop Details', Hindi: 'दुकान का विवरण', Bengali: 'দোকানের বিবরণ' },
  shopName: { English: 'Shop Name', Hindi: 'दुकान का नाम', Bengali: 'দোকানের নাম' },
  ownerName: { English: 'Owner Name', Hindi: 'मालिक का नाम', Bengali: 'মালিকের নাম' },
  phoneNo: { English: 'Phone No.', Hindi: 'फोन नं.', Bengali: 'ফোন নং' },
  address: { English: 'Address', Hindi: 'पता', Bengali: 'ঠিকানা' },
  gstNo: { English: 'GST No.', Hindi: 'जीएसटी नं.', Bengali: 'জিএসটি নং' },
  paymentQr: { English: 'Payment QR', Hindi: 'भुगतान QR', Bengali: 'পেমেন্ট QR' },
  enterShopName: { English: 'Enter shop name', Hindi: 'दुकान का नाम दर्ज करें', Bengali: 'দোকানের নাম লিখুন' },
  enterOwnerName: { English: 'Enter owner name', Hindi: 'मालिक का नाम दर्ज करें', Bengali: 'মালিকের নাম লিখুন' },
  enterPhone: { English: 'Enter phone number', Hindi: 'फोन नंबर दर्ज करें', Bengali: 'ফোন নম্বর লিখুন' },
  enterAddress: { English: 'Enter address', Hindi: 'पता दर्ज करें', Bengali: 'ঠিকানা লিখুন' },
  enterGst: { English: 'Enter GST number', Hindi: 'जीएसटी नंबर दर्ज करें', Bengali: 'জিএসটি নম্বর লিখুন' },
  tapAddLogo: { English: 'Tap to add shop logo', Hindi: 'दुकान का लोगो जोड़ने के लिए टैप करें', Bengali: 'দোকানের লোগো যোগ করতে ট্যাপ করুন' },
  tapAddQr: { English: 'Tap to add QR code', Hindi: 'QR कोड जोड़ने के लिए टैप करें', Bengali: 'QR কোড যোগ করতে ট্যাপ করুন' },
  updateChanges: { English: 'Update Changes', Hindi: 'परिवर्तन अपडेट करें', Bengali: 'পরিবর্তন আপডেট করুন' },
  saved: { English: 'Saved', Hindi: 'सहेजा गया', Bengali: 'সংরক্ষিত' },
  shopDetailsUpdated: { English: 'Shop details updated', Hindi: 'दुकान का विवरण अपडेट किया गया', Bengali: 'দোকানের বিবরণ আপডেট করা হয়েছে' },
};

const productDetail: TranslationMap = {
  productDetails: { English: 'Product Details', Hindi: 'उत्पाद विवरण', Bengali: 'পণ্যের বিবরণ' },
  deleteProduct: { English: 'Delete Product', Hindi: 'उत्पाद हटाएं', Bengali: 'পণ্য মুছুন' },
  price: { English: 'Price', Hindi: 'मूल्य', Bengali: 'মূল্য' },
  buyingPriceLabel: { English: 'Buying Price', Hindi: 'खरीद मूल्य', Bengali: 'ক্রয় মূল্য' },
  sellingPriceLabel: { English: 'Selling Price', Hindi: 'बिक्री मूल्य', Bengali: 'বিক্রয় মূল্য' },
  addedDate: { English: 'Added Date', Hindi: 'जोड़ने की तिथि', Bengali: 'যোগ করার তারিখ' },
  saveChanges: { English: 'Save Changes', Hindi: 'परिवर्तन सहेजें', Bengali: 'পরিবর্তন সংরক্ষণ করুন' },
  deleteConfirm: { English: 'Are you sure you want to delete "%s"? This action cannot be undone.', Hindi: 'क्या आप "%s" को हटाना चाहते हैं? यह क्रिया पूर्ववत नहीं की जा सकती।', Bengali: 'আপনি কি "%s" মুছতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।' },
  productUpdated: { English: 'Product updated successfully', Hindi: 'उत्पाद सफलतापूर्वक अपडेट हुआ', Bengali: 'পণ্য সফলভাবে আপডেট হয়েছে' },
  productDeleted: { English: 'Product deleted successfully', Hindi: 'उत्पाद सफलतापूर्वक हटा दिया गया', Bengali: 'পণ্য সফলভাবে মুছে ফেলা হয়েছে' },
  failLoadDetail: { English: 'Failed to load product details', Hindi: 'उत्पाद विवरण लोड करने में विफल', Bengali: 'পণ্যের বিবরণ লোড করতে ব্যর্থ' },
  failUpdate: { English: 'Failed to update product', Hindi: 'उत्पाद अपडेट करने में विफल', Bengali: 'পণ্য আপডেট করতে ব্যর্থ' },
  failDelete: { English: 'Failed to delete product', Hindi: 'उत्पाद हटाने में विफल', Bengali: 'পণ্য মুছতে ব্যর্থ' },
};

const categoriesStr: TranslationMap = {
  categories: { English: 'Categories', Hindi: 'श्रेणियाँ', Bengali: 'ক্যাটাগরি' },
  addCategory: { English: 'Add category...', Hindi: 'श्रेणी जोड़ें...', Bengali: 'ক্যাটাগরি যোগ করুন...' },
  noCategories: { English: 'No categories added', Hindi: 'कोई श्रेणी नहीं जोड़ी गई', Bengali: 'কোনো ক্যাটাগরি যোগ করা হয়নি' },
  categoryExists: { English: 'Category already added', Hindi: 'श्रेणी पहले से जोड़ी गई है', Bengali: 'ক্যাটাগরি আগেই যোগ করা হয়েছে' },
  removeCat: { English: 'Remove "%s"?', Hindi: '"%s" हटाएं?', Bengali: '"%s" সরান?' },
};

const customersStr: TranslationMap = {
  customers: { English: 'Customers', Hindi: 'ग्राहक', Bengali: 'গ্রাহক' },
  customerName: { English: 'Customer name', Hindi: 'ग्राहक का नाम', Bengali: 'গ্রাহকের নাম' },
  phoneNumber: { English: 'Phone number', Hindi: 'फोन नंबर', Bengali: 'ফোন নম্বর' },
  noCustomers: { English: 'No customers yet', Hindi: 'अभी तक कोई ग्राहक नहीं', Bengali: 'এখনো কোনো গ্রাহক নেই' },
  namePhoneRequired: { English: 'Name and phone required', Hindi: 'नाम और फोन आवश्यक', Bengali: 'নাম এবং ফোন প্রয়োজন' },
  removeCustomer: { English: 'Remove this customer?', Hindi: 'इस ग्राहक को हटाएं?', Bengali: 'এই গ্রাহককে সরান?' },
};

const suppliers: TranslationMap = {
  suppliers: { English: 'Suppliers', Hindi: 'आपूर्तिकर्ता', Bengali: 'সরবরাহকারী' },
  addSupplier: { English: 'Add Supplier', Hindi: 'आपूर्तिकर्ता जोड़ें', Bengali: 'সরবরাহকারী যোগ করুন' },
  supplierName: { English: 'Supplier Name', Hindi: 'आपूर्तिकर्ता का नाम', Bengali: 'সরবরাহকারীর নাম' },
  phoneNumber: { English: 'Phone Number', Hindi: 'फोन नंबर', Bengali: 'ফোন নম্বর' },
  whatsappNumber: { English: 'WhatsApp Number', Hindi: 'व्हाट्सएप नंबर', Bengali: 'হোয়াটসঅ্যাপ নম্বর' },
  emailOptional: { English: 'Email (Optional)', Hindi: 'ईमेल (वैकल्पिक)', Bengali: 'ইমেল (ঐচ্ছিক)' },
  tapForDetails: { English: 'Tap for details', Hindi: 'विवरण के लिए टैप करें', Bengali: 'বিবরণের জন্য ট্যাপ করুন' },
  noSuppliers: { English: 'No Suppliers Yet', Hindi: 'अभी तक कोई आपूर्तिकर्ता नहीं', Bengali: 'এখনো কোনো সরবরাহকারী নেই' },
  startAddSupplier: { English: "Start by adding your first supplier", Hindi: 'अपना पहला आपूर्तिकर्ता जोड़कर शुरू करें', Bengali: 'আপনার প্রথম সরবরাহকারী যোগ করে শুরু করুন' },
  supplierAdded: { English: 'Supplier added successfully!', Hindi: 'आपूर्तिकर्ता सफलतापूर्वक जोड़ा गया!', Bengali: 'সরবরাহকারী সফলভাবে যোগ করা হয়েছে!' },
  supplierDeleted: { English: 'Supplier deleted successfully!', Hindi: 'आपूर्तिकर्ता सफलतापूर्वक हटा दिया गया!', Bengali: 'সরবরাহকারী সফলভাবে মুছে ফেলা হয়েছে!' },
  deleteSupplier: { English: 'Delete Supplier', Hindi: 'आपूर्तिकर्ता हटाएं', Bengali: 'সরবরাহকারী মুছুন' },
  deleteSupplierConfirm: { English: 'Are you sure you want to delete "%s"? This action cannot be undone.', Hindi: 'क्या आप "%s" को हटाना चाहते हैं? यह क्रिया पूर्ववत नहीं की जा सकती।', Bengali: 'আপনি কি "%s" মুছতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।' },
  enterNameRequired: { English: 'Please enter a supplier name.', Hindi: 'कृपया आपूर्तिकर्ता का नाम दर्ज करें।', Bengali: 'অনুগ্রহ করে সরবরাহকারীর নাম লিখুন।' },
  enterPhoneRequired: { English: 'Please enter a phone number.', Hindi: 'कृपया फोन नंबर दर्ज करें।', Bengali: 'অনুগ্রহ করে ফোন নম্বর লিখুন।' },
  enterWhatsappRequired: { English: 'Please enter a WhatsApp number.', Hindi: 'कृपया व्हाट्सएप नंबर दर्ज करें।', Bengali: 'অনুগ্রহ করে হোয়াটসঅ্যাপ নম্বর লিখুন।' },
  phoneLabel: { English: 'Phone: %s', Hindi: 'फोन: %s', Bengali: 'ফোন: %s' },
  whatsappLabel: { English: 'WhatsApp: %s', Hindi: 'व्हाट्सएप: %s', Bengali: 'হোয়াটসঅ্যাপ: %s' },
  emailLabel: { English: 'Email: %s', Hindi: 'ईमेल: %s', Bengali: 'ইমেল: %s' },
};

const supplierOrder: TranslationMap = {
  orders: { English: 'Orders', Hindi: 'ऑर्डर', Bengali: 'অর্ডার' },
  searchProducts: { English: 'Search products to order...', Hindi: 'ऑर्डर करने के लिए उत्पाद खोजें...', Bengali: 'অর্ডার করতে পণ্য অনুসন্ধান...' },
  call: { English: 'Call', Hindi: 'कॉल', Bengali: 'কল' },
  sendOrder: { English: 'Send Order', Hindi: 'ऑर्डर भेजें', Bengali: 'অর্ডার পাঠান' },
  noItemsInOrder: { English: 'No items in order', Hindi: 'ऑर्डर में कोई वस्तु नहीं', Bengali: 'অর্ডারে কোনো পণ্য নেই' },
  addToOrder: { English: 'Add products to create an order', Hindi: 'ऑर्डर बनाने के लिए उत्पाद जोड़ें', Bengali: 'অর্ডার তৈরি করতে পণ্য যোগ করুন' },
  callNotAvailable: { English: 'Unable to make phone calls on this device', Hindi: 'इस डिवाइस पर कॉल करना संभव नहीं', Bengali: 'এই ডিভাইসে কল করা সম্ভব নয়' },
  callFailed: { English: 'Failed to initiate call', Hindi: 'कॉल शुरू करने में विफल', Bengali: 'কল শুরু করতে ব্যর্থ' },
  orderSent: { English: 'Order Sent', Hindi: 'ऑर्डर भेज दिया गया', Bengali: 'অর্ডার পাঠানো হয়েছে' },
  orderSentMsg: { English: 'Your order has been sent via WhatsApp!', Hindi: 'आपका ऑर्डर व्हाट्सएप के माध्यम से भेज दिया गया है!', Bengali: 'আপনার অর্ডার হোয়াটসঅ্যাপের মাধ্যমে পাঠানো হয়েছে!' },
  whatsappFailed: { English: 'Failed to send WhatsApp message', Hindi: 'व्हाट्सएप संदेश भेजने में विफल', Bengali: 'হোয়াটসঅ্যাপ বার্তা পাঠাতে ব্যর্থ' },
};

const exportData: TranslationMap = {
  exportData: { English: 'Export Data', Hindi: 'डेटा निर्यात', Bengali: 'ডেটা এক্সপোর্ট' },
  exportProducts: { English: 'Export Products', Hindi: 'उत्पाद निर्यात', Bengali: 'পণ্য এক্সপোর্ট' },
  exportSales: { English: 'Export Sales', Hindi: 'बिक्री निर्यात', Bengali: 'বিক্রয় এক্সপোর্ট' },
  exportSuppliers: { English: 'Export Suppliers', Hindi: 'आपूर्तिकर्ता निर्यात', Bengali: 'সরবরাহকারী এক্সপোর্ট' },
  exportAsCsv: { English: 'Export as CSV', Hindi: 'CSV के रूप में निर्यात', Bengali: 'CSV হিসেবে এক্সপোর্ট' },
  exportFailed: { English: 'Failed to export data', Hindi: 'डेटा निर्यात करने में विफल', Bengali: 'ডেটা এক্সপোর্ট করতে ব্যর্থ' },
};

const backupRestore: TranslationMap = {
  backupRestore: { English: 'Backup & Restore', Hindi: 'बैकअप और पुनर्स्थापना', Bengali: 'ব্যাকআপ ও পুনরুদ্ধার' },
  backupData: { English: 'Backup Data', Hindi: 'डेटा का बैकअप', Bengali: 'ডেটা ব্যাকআপ' },
  restoreData: { English: 'Restore Data', Hindi: 'डेटा पुनर्स्थापित', Bengali: 'ডেটা পুনরুদ্ধার' },
  backupSub: { English: 'Export your database to a file', Hindi: 'अपने डेटाबेस को एक फ़ाइल में निर्यात करें', Bengali: 'আপনার ডাটাবেস একটি ফাইলে এক্সপোর্ট করুন' },
  restoreSub: { English: 'Import a previously saved backup', Hindi: 'पहले से सहेजा गया बैकअप आयात करें', Bengali: 'পূর্বে সংরক্ষিত ব্যাকআপ ইম্পোর্ট করুন' },
  dataStoredLocally: { English: 'All data is stored locally on your device', Hindi: 'सभी डेटा आपके डिवाइस पर स्थानीय रूप से संग्रहीत है', Bengali: 'সমস্ত ডেটা আপনার ডিভাইসে স্থানীয়ভাবে সংরক্ষিত' },
  backupSoon: { English: 'Backup feature coming soon. Your data is stored locally in SQLite.', Hindi: 'बैकअप सुविधा जल्द आ रही है। आपका डेटा SQLite में स्थानीय रूप से संग्रहीत है।', Bengali: 'ব্যাকআপ ফিচার শীঘ্রই আসছে। আপনার ডেটা SQLite-এ স্থানীয়ভাবে সংরক্ষিত।' },
  restoreSoon: { English: 'Restore feature coming soon.', Hindi: 'पुनर्स्थापना सुविधा जल्द आ रही है।', Bengali: 'পুনরুদ্ধার ফিচার শীঘ্রই আসছে।' },
};

const contactSupport: TranslationMap = {
  contactSupport: { English: 'Contact Support', Hindi: 'सहायता से संपर्क', Bengali: 'সহাযোগের জন্য যোগাযোগ' },
  emailUs: { English: 'Email Us', Hindi: 'हमें ईमेल करें', Bengali: 'আমাদের ইমেল করুন' },
  whatsapp: { English: 'WhatsApp', Hindi: 'व्हाट्सएप', Bengali: 'হোয়াটসঅ্যাপ' },
  supportEmail: { English: 'support@invo.app', Hindi: 'support@invo.app', Bengali: 'support@invo.app' },
  supportPhone: { English: '+91-9876543210', Hindi: '+91-9876543210', Bengali: '+91-9876543210' },
  responseTime: { English: 'We typically respond within 24 hours on business days.', Hindi: 'हम आमतौर पर कार्य दिवसों पर 24 घंटे के भीतर जवाब देते हैं।', Bengali: 'আমরা সাধারণত কর্মদিবসে ২৪ ঘণ্টার মধ্যে উত্তর দিই।' },
};

const terms: TranslationMap = {
  terms: { English: 'Terms & Conditions', Hindi: 'नियम और शर्तें', Bengali: 'শর্তাবলী' },
  content: { English: `Last updated: May 2026

1. Acceptance of Terms
By using InVo, you agree to these terms. If you do not agree, do not use the app.

2. Data Storage
All data is stored locally on your device. We do not collect, store, or transmit your data to any server.

3. Use License
InVo is provided for personal and small business inventory management. You may not modify, distribute, or reverse-engineer the app.

4. Limitation of Liability
InVo is provided "as is" without warranty. We are not liable for any damages arising from the use of the app.

5. Changes
We reserve the right to update these terms at any time. Continued use constitutes acceptance of changes.

6. Contact
For questions, contact us at support@invo.app`, Hindi: `अंतिम अपडेट: मई 2026

1. शर्तों की स्वीकृति
InVo का उपयोग करके, आप इन शर्तों से सहमत होते हैं। यदि आप सहमत नहीं हैं, तो ऐप का उपयोग न करें।

2. डेटा भंडारण
सभी डेटा आपके डिवाइस पर स्थानीय रूप से संग्रहीत होता है। हम आपके डेटा को किसी भी सर्वर पर एकत्र, संग्रहीत या प्रसारित नहीं करते हैं।

3. उपयोग लाइसेंस
InVo व्यक्तिगत और छोटे व्यवसाय इन्वेंट्री प्रबंधन के लिए प्रदान किया गया है। आप ऐप को संशोधित, वितरित या रिवर्स-इंजीनियर नहीं कर सकते।

4. देयता की सीमा
InVo "जैसा है" वारंटी के बिना प्रदान किया गया है। हम ऐप के उपयोग से उत्पन्न किसी भी क्षति के लिए उत्तरदायी नहीं हैं।

5. परिवर्तन
हम किसी भी समय इन शर्तों को अपडेट करने का अधिकार सुरक्षित रखते हैं। निरंतर उपयोग परिवर्तनों की स्वीकृति माना जाएगा।

6. संपर्क
प्रश्नों के लिए, हमसे support@invo.app पर संपर्क करें।`, Bengali: `সর্বশেষ আপডেট: মে ২০২৬

1. শর্তাবলীর গ্রহণযোগ্যতা
InVo ব্যবহার করে, আপনি এই শর্তাবলীতে সম্মত হন। যদি আপনি সম্মত না হন, তাহলে অ্যাপটি ব্যবহার করবেন না।

2. ডেটা সংরক্ষণ
সমস্ত ডেটা আপনার ডিভাইসে স্থানীয়ভাবে সংরক্ষিত হয়। আমরা কোনো সার্ভারে আপনার ডেটা সংগ্রহ, সংরক্ষণ বা প্রেরণ করি না।

3. ব্যবহার লাইসেন্স
InVo ব্যক্তিগত এবং ছোট ব্যবসার ইনভেন্টরি পরিচালনার জন্য প্রদান করা হয়েছে। আপনি অ্যাপটি পরিবর্তন, বিতরণ বা রিভার্স-ইঞ্জিনিয়ার করতে পারবেন না।

4. দায়বদ্ধতার সীমাবদ্ধতা
InVo "যেমন আছে" ওয়ারেন্টি ছাড়া প্রদান করা হয়েছে। অ্যাপ ব্যবহারের ফলে কোনো ক্ষতির জন্য আমরা দায়ী নই।

5. পরিবর্তন
আমরা যেকোনো সময় এই শর্তাবলী আপডেট করার অধিকার সংরক্ষণ করি। অবিরত ব্যবহার পরিবর্তনগুলির গ্রহণযোগ্যতা গঠন করে।

6. যোগাযোগ
প্রশ্নের জন্য, support@invo.app-এ আমাদের সাথে যোগাযোগ করুন।` },
};

const privacy: TranslationMap = {
  privacy: { English: 'Privacy Policy', Hindi: 'गोपनीयता नीति', Bengali: 'গোপনীয়তা নীতি' },
  content: { English: `Last updated: May 2026

Privacy Policy for InVo

1. No Data Collection
InVo does not collect, store, or transmit any personal data. All information you enter (products, sales, suppliers) is stored exclusively on your device.

2. No Internet Required
Core functionality works entirely offline. Only the AI Chat feature requires an internet connection to communicate with Google Gemini.

3. Third-Party Services
When you use AI Chat, queries are sent to Google Gemini API. Google's privacy policy applies to those specific interactions. No inventory data is stored by Google.

4. Your Control
You can delete all your data at any time by logging out or resetting the database from Settings.

5. Changes
We may update this policy. Check the app for the latest version.

Contact: support@invo.app`, Hindi: `अंतिम अपडेट: मई 2026

InVo के लिए गोपनीयता नीति

1. कोई डेटा संग्रह नहीं
InVo कोई व्यक्तिगत डेटा एकत्र, संग्रहीत या प्रसारित नहीं करता है। आपके द्वारा दर्ज की गई सभी जानकारी (उत्पाद, बिक्री, आपूर्तिकर्ता) विशेष रूप से आपके डिवाइस पर संग्रहीत होती है।

2. कोई इंटरनेट आवश्यक नहीं
मुख्य कार्यक्षमता पूरी तरह से ऑफलाइन काम करती है। केवल AI चैट सुविधा को Google Gemini से संवाद करने के लिए इंटरनेट कनेक्शन की आवश्यकता है।

3. तृतीय-पक्ष सेवाएं
जब आप AI चैट का उपयोग करते हैं, तो क्वेरी Google Gemini API को भेजी जाती हैं। Google की गोपनीयता नीति उन विशिष्ट इंटरैक्शन पर लागू होती है। Google द्वारा कोई इन्वेंट्री डेटा संग्रहीत नहीं किया जाता है।

4. आपका नियंत्रण
आप लॉग आउट करके या सेटिंग्स से डेटाबेस रीसेट करके किसी भी समय अपना सारा डेटा हटा सकते हैं।

5. परिवर्तन
हम इस नीति को अपडेट कर सकते हैं। नवीनतम संस्करण के लिए ऐप देखें।

संपर्क: support@invo.app`, Bengali: `সর্বশেষ আপডেট: মে ২০২৬

InVo-এর জন্য গোপনীয়তা নীতি

1. কোনো ডেটা সংগ্রহ নয়
InVo কোনো ব্যক্তিগত ডেটা সংগ্রহ, সংরক্ষণ বা প্রেরণ করে না। আপনি যে সমস্ত তথ্য প্রবেশ করেন (পণ্য, বিক্রয়, সরবরাহকারী) একচেটিয়াভাবে আপনার ডিভাইসে সংরক্ষিত হয়।

2. কোনো ইন্টারনেট প্রয়োজন নেই
মূল কার্যকারিতা সম্পূর্ণ অফলাইনে কাজ করে। শুধুমাত্র AI চ্যাট ফিচারের Google Gemini-এর সাথে যোগাযোগের জন্য ইন্টারনেট সংযোগ প্রয়োজন।

3. তৃতীয়-পক্ষের পরিষেবা
আপনি যখন AI চ্যাট ব্যবহার করেন, তখন কোয়েরি Google Gemini API-তে পাঠানো হয়। Google-এর গোপনীয়তা নীতি সেই নির্দিষ্ট মিথস্ক্রিয়াগুলির ক্ষেত্রে প্রযোজ্য। Google দ্বারা কোনো ইনভেন্টরি ডেটা সংরক্ষণ করা হয় না।

4. আপনার নিয়ন্ত্রণ
আপনি লগ আউট করে বা সেটিংস থেকে ডাটাবেস রিসেট করে যেকোনো সময় আপনার সমস্ত ডেটা মুছে ফেলতে পারেন।

5. পরিবর্তন
আমরা এই নীতি আপডেট করতে পারি। সর্বশেষ সংস্করণের জন্য অ্যাপটি দেখুন।

যোগাযোগ: support@invo.app` },
};

const weeklyReport: TranslationMap = {
  weeklyReport: { English: 'Weekly Report', Hindi: 'साप्ताहिक रिपोर्ट', Bengali: 'সাপ্তাহিক রিপোর্ট' },
  thisWeekSummary: { English: "This Week's Summary", Hindi: 'इस सप्ताह का सारांश', Bengali: 'এই সপ্তাহের সারসংক্ষেপ' },
  revenue: { English: 'Revenue', Hindi: 'राजस्व', Bengali: 'আয়' },
  sales: { English: 'Sales', Hindi: 'बिक्री', Bengali: 'বিক্রয়' },
  itemsSold: { English: 'Items Sold', Hindi: 'बेची गई वस्तुएं', Bengali: 'বিক্রিত পণ্য' },
  topProducts: { English: 'Top Products', Hindi: 'शीर्ष उत्पाद', Bengali: 'শীর্ষ পণ্য' },
  inventoryAlerts: { English: 'Inventory Alerts', Hindi: 'इन्वेंट्री अलर्ट', Bengali: 'ইনভেন্টরি সতর্কতা' },
  outOfStockInfo: { English: 'Out of Stock: %s • Low Stock: %s', Hindi: 'स्टॉक खत्म: %s • कम स्टॉक: %s', Bengali: 'স্টক শেষ: %s • কম স্টক: %s' },
  generatePdf: { English: 'Generate PDF Report', Hindi: 'PDF रिपोर्ट बनाएं', Bengali: 'PDF রিপোর্ট তৈরি করুন' },
  generating: { English: 'Generating...', Hindi: 'बन रहा है...', Bengali: 'তৈরি হচ্ছে...' },
  loadingWeeklyData: { English: 'Loading weekly data...', Hindi: 'साप्ताहिक डेटा लोड हो रहा है...', Bengali: 'সাপ্তাহিক ডেটা লোড হচ্ছে...' },
};

const aiChat: TranslationMap = {
  aiChat: { English: 'InVo AI', Hindi: 'InVo AI', Bengali: 'InVo AI' },
  welcome: { English: `Hi! I'm InVo AI — your inventory assistant!

I can help you with:
• Inventory status and stock alerts
• Sales trends and best sellers
• Supplier info and ordering tips
• Business insights and pricing strategies

What would you like to know today?`, Hindi: `नमस्ते! मैं InVo AI हूं — आपका इन्वेंट्री सहायक!

मैं आपकी मदद कर सकता हूं:
• इन्वेंट्री स्थिति और स्टॉक अलर्ट
• बिक्री रुझान और सबसे अधिक बिकने वाले
• आपूर्तिकर्ता जानकारी और ऑर्डरिंग टिप्स
• व्यावसायिक जानकारी और मूल्य निर्धारण रणनीतियां

आज आप क्या जानना चाहेंगे?`, Bengali: `হাই! আমি InVo AI — আপনার ইনভেন্টরি সহায়ক!

আমি আপনাকে সাহায্য করতে পারি:
• ইনভেন্টরি অবস্থা এবং স্টক সতর্কতা
• বিক্রয় প্রবণতা এবং সর্বাধিক বিক্রিত
• সরবরাহকারীর তথ্য এবং অর্ডারিং টিপস
• ব্যবসায়িক অন্তর্দৃষ্টি এবং মূল্য নির্ধারণ কৌশল

আজ আপনি কী জানতে চান?` },
  askAnything: { English: 'Ask anything about your business...', Hindi: 'अपने व्यवसाय के बारे में कुछ भी पूछें...', Bengali: 'আপনার ব্যবসা সম্পর্কে কিছু জিজ্ঞাসা করুন...' },
  initializing: { English: 'Initializing AI Assistant...', Hindi: 'AI सहायक शुरू हो रहा है...', Bengali: 'AI সহায়ক শুরু হচ্ছে...' },
  analyzing: { English: 'Analyzing your business data...', Hindi: 'आपके व्यावसायिक डेटा का विश्लेषण...', Bengali: 'আপনার ব্যবসার ডেটা বিশ্লেষণ...' },
  thinking: { English: 'InVo AI is thinking...', Hindi: 'InVo AI सोच रहा है...', Bengali: 'InVo AI ভাবছে...' },
  stop: { English: 'Stop', Hindi: 'रोकें', Bengali: 'থামান' },
  retry: { English: 'Retry', Hindi: 'पुनः प्रयास', Bengali: 'পুনরায় চেষ্টা' },
  apiKey: { English: 'Gemini API Key', Hindi: 'Gemini API कुंजी', Bengali: 'Gemini API কী' },
  apiKeyDesc: { English: 'Enter your Google Gemini API key to enable AI features. Get your key from Google AI Studio.', Hindi: 'AI सुविधाओं को सक्षम करने के लिए अपनी Google Gemini API कुंजी दर्ज करें। Google AI Studio से अपनी कुंजी प्राप्त करें।', Bengali: 'AI বৈশিষ্ট্য সক্ষম করতে আপনার Google Gemini API কী লিখুন। Google AI Studio থেকে আপনার কী পান।' },
  apiKeyLabel: { English: 'API Key', Hindi: 'API कुंजी', Bengali: 'API কী' },
  apiKeyPlaceholder: { English: 'AIza...', Hindi: 'AIza...', Bengali: 'AIza...' },
  apiKeyRequired: { English: 'Please configure your Gemini API key to use InVo AI.', Hindi: 'InVo AI का उपयोग करने के लिए कृपया अपनी Gemini API कुंजी कॉन्फ़िगर करें।', Bengali: 'InVo AI ব্যবহার করতে আপনার Gemini API কী কনফিগার করুন।' },
  initFailed: { English: 'Unable to start AI chat. Please check your internet connection and API key.', Hindi: 'AI चैट शुरू करने में असमर्थ। कृपया अपना इंटरनेट कनेक्शन और API कुंजी जांचें।', Bengali: 'AI চ্যাট শুরু করতে অক্ষম। আপনার ইন্টারনেট সংযোগ এবং API কী পরীক্ষা করুন।' },
  enterApiKey: { English: 'Please enter your Gemini API key.', Hindi: 'कृपया अपनी Gemini API कुंजी दर्ज करें।', Bengali: 'আপনার Gemini API কী লিখুন।' },
  apiKeyUpdated: { English: 'API key updated successfully!', Hindi: 'API कुंजी सफलतापूर्वक अपडेट हुई!', Bengali: 'API কী সফলভাবে আপডেট হয়েছে!' },
  apiKeyFailed: { English: 'Failed to update API key. Please try again.', Hindi: 'API कुंजी अपडेट करने में विफल। कृपया पुनः प्रयास करें।', Bengali: 'API কী আপডেট করতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।' },
};

const tabs: TranslationMap = {
  home: { English: 'Home', Hindi: 'होम', Bengali: 'হোম' },
  products: { English: 'Products', Hindi: 'उत्पाद', Bengali: 'পণ্য' },
  explore: { English: 'Explore', Hindi: 'एक्सप्लोर', Bengali: 'এক্সপ্লোর' },
  settings: { English: 'Settings', Hindi: 'सेटिंग्स', Bengali: 'সেটিংস' },
};

const lockScreen: TranslationMap = {
  invoLocked: { English: 'InVo Locked', Hindi: 'InVo लॉक', Bengali: 'InVo লক' },
  authenticateToAccess: { English: 'Authenticate to access the app', Hindi: 'ऐप तक पहुंचने के लिए प्रमाणित करें', Bengali: 'অ্যাপ অ্যাক্সেস করতে প্রমাণীকরণ করুন' },
  unlock: { English: 'Unlock', Hindi: 'अनलॉक', Bengali: 'আনলক' },
  unlockInvo: { English: 'Unlock InVo', Hindi: 'InVo अनलॉक करें', Bengali: 'InVo আনলক করুন' },
  verifyBiometry: { English: 'Verify to enable Biometry Lock', Hindi: 'बायोमेट्री लॉक सक्षम करने के लिए सत्यापित करें', Bengali: 'বায়োমেট্রি লক সক্ষম করতে যাচাই করুন' },
  notAvailable: { English: 'Biometric hardware not found', Hindi: 'बायोमेट्रिक हार्डवेयर नहीं मिला', Bengali: 'বায়োমেট্রিক হার্ডওয়্যার পাওয়া যায়নি' },
  notSetUp: { English: 'No biometrics enrolled on this device', Hindi: 'इस डिवाइस पर कोई बायोमेट्रिक पंजीकृत नहीं', Bengali: 'এই ডিভাইসে কোনো বায়োমেট্রিক নথিভুক্ত নেই' },
  verificationFailed: { English: 'Could not verify your identity', Hindi: 'आपकी पहचान सत्यापित नहीं की जा सकी', Bengali: 'আপনার পরিচয় যাচাই করা যায়নি' },
};

const onboarding: TranslationMap = {
  welcome: { English: 'Welcome to InVo', Hindi: 'InVo में आपका स्वागत है', Bengali: 'InVo-তে স্বাগতম' },
  effortless: { English: 'Effortless Inventory Mastery 🚀', Hindi: 'सहज इन्वेंट्री महारत 🚀', Bengali: 'সহজ ইনভেন্টরি দক্ষতা 🚀' },
  profileSetup: { English: 'Profile Setup', Hindi: 'प्रोफ़ाइल सेटअप', Bengali: 'প্রোফাইল সেটআপ' },
  personalize: { English: "Let's Personalize Your Experience", Hindi: 'आइए आपके अनुभव को वैयक्तिकृत करें', Bengali: 'আপনার অভিজ্ঞতা ব্যক্তিগতকৃত করুন' },
  businessSetup: { English: 'Business Setup', Hindi: 'व्यवसाय सेटअप', Bengali: 'ব্যবসা সেটআপ' },
  letsSetupBusiness: { English: "Let's set up Your Business Profile", Hindi: 'आइए आपका व्यवसाय प्रोफ़ाइल सेट करें', Bengali: 'আপনার ব্যবসার প্রোফাইল সেট আপ করুন' },
  enterYourName: { English: 'Enter Your Name', Hindi: 'अपना नाम दर्ज करें', Bengali: 'আপনার নাম লিখুন' },
  enterBusinessName: { English: 'Enter Business Name', Hindi: 'व्यवसाय का नाम दर्ज करें', Bengali: 'ব্যবসার নাম লিখুন' },
  tapAddPhoto: { English: 'Tap to add photo', Hindi: 'फोटो जोड़ने के लिए टैप करें', Bengali: 'ছবি যোগ করতে ট্যাপ করুন' },
  tapAddQr: { English: 'Tap to add QR code', Hindi: 'QR कोड जोड़ने के लिए टैप करें', Bengali: 'QR কোড যোগ করতে ট্যাপ করুন' },
  displayInSettings: { English: 'This will be displayed in your settings', Hindi: 'यह आपकी सेटिंग्स में प्रदर्शित होगा', Bengali: 'এটি আপনার সেটিংসে প্রদর্শিত হবে' },
  displayInSettingsBusiness: { English: 'This will be displayed on your business', Hindi: 'यह आपके व्यवसाय पर प्रदर्शित होगा', Bengali: 'এটি আপনার ব্যবসায় প্রদর্শিত হবে' },
  letsGo: { English: "Let's GO!", Hindi: 'चलो चलें!', Bengali: 'চলুন যাই!' },
  next: { English: 'Next', Hindi: 'अगला', Bengali: 'পরবর্তী' },
  getStarted: { English: 'Get Started', Hindi: 'शुरू करें', Bengali: 'শুরু করুন' },
};

export const TRANSLATIONS: Record<string, TranslationMap> = {
  shared,
  dashboard,
  products,
  explore,
  settings: settingsStr,
  shopDetails,
  productDetail,
  categories: categoriesStr,
  customers: customersStr,
  suppliers,
  supplierOrder,
  exportData,
  backupRestore,
  contactSupport,
  terms,
  privacy,
  weeklyReport,
  aiChat,
  tabs,
  lockScreen,
  onboarding,
};
