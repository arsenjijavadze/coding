enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membershipReverse);
console.log(membership);

enum SocialMedia {
    TWITTER = 'twitter',
    FACEBOOK = 'facebook',
    INSTAGRAM = 'instagram'
}

const social = SocialMedia.INSTAGRAM;
console.log(social);

