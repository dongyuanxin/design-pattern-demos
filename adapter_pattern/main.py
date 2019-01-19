def qq_music_info():
    return {
        'n': "菊花台",
        'a': "周杰伦",
        'f': 1
    }


def netease_music_info():
    return {
        'name': "菊花台",
        'author': "周杰伦",
        'f': False
    }


def adapter(info):
    result = {}
    result['name'] = info["name"] if 'name' in info else info['n']
    result['author'] = info['author'] if 'author' in info else info['a']
    result['free'] = not not info["f"]
    return result


if __name__ == '__main__':
    print(adapter(qq_music_info()))
    print(adapter(netease_music_info()))
