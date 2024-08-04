/*
圈X:
incognito解锁会员永久
[rewrite_local]
^https\:\/\/api.revenuecat.com\/v1\/subscribers(.+) url script-response-body https://raw.githubusercontent.com/Heymail12/Hey/main/incognito.js
[mitm]
hostname = api.revenuecat.com,
*/

var obj = JSON.parse($response.body);
obj={
  "request_date_ms" : 1722758146332,
  "request_date" : "2024-08-04T07:55:46Z",
  "subscriber" : {
    "non_subscriptions" : {
      "com.overdesigned.incognito.lifetime" : [
        {
          "id" : "d1ef312e90",
          "is_sandbox" : true,
          "purchase_date" : "2024-02-09T07:01:12Z",
          "original_purchase_date" : "2024-02-09T07:01:12Z",
          "store" : "app_store",
          "store_transaction_id" : "2000000520358890"
        },
        {
          "id" : "cf8a02e3dc",
          "is_sandbox" : true,
          "purchase_date" : "2024-03-05T05:31:47Z",
          "original_purchase_date" : "2024-03-05T05:31:47Z",
          "store" : "app_store",
          "store_transaction_id" : "2000000539953882"
        }
      ]
    },
    "first_seen" : "2023-12-25T20:40:58Z",
    "original_application_version" : "1.0",
    "other_purchases" : {
      "com.overdesigned.incognito.lifetime" : {
        "purchase_date" : "2024-03-05T05:31:47Z"
      }
    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {
      "unlock" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-03-05T05:31:47Z",
        "product_identifier" : "com.overdesigned.incognito.lifetime",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "2023-12-25T20:41:56Z",
    "original_app_user_id" : "$RCAnonymousID:4d730e5deb6b4b73bcefe0ddc81dfb18",
    "last_seen" : "2024-08-03T12:55:10Z"
  }
}